// BBrown Global Strategy Platform - Enhanced Application Logic

// Smooth Page Navigation
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
  initializeNavigation();
  initializeCharts();
  initializeVisualizations();
});

function initializeApp() {
  // Update hero stats with smooth count-up animation
  updateHeroStats();

  // Update metric cards
  updateMetricCards();

  // Render all visualizations
  setTimeout(() => {
    renderCoverageChart();
    renderPriorityChart();
    renderHeatmap();
    renderCoverageGrid();
    renderProficiencyDistChart();
    renderOpportunityMatrix();
    renderMarketsList();
    renderInsightsGrid();
  }, 100);
}

function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active from all
      navLinks.forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(".page")
        .forEach((p) => p.classList.remove("active"));

      // Add active to clicked
      link.classList.add("active");

      // Show page with smooth transition
      const pageId = link.getAttribute("data-page") + "-page";
      const page = document.getElementById(pageId);
      if (page) {
        page.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// Smooth count-up animation for numbers
function animateValue(element, start, end, duration, suffix = "") {
  if (!element) return;

  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.round(current) + suffix;
  }, 16);
}

function updateHeroStats() {
  const markets = sampleData.markets.length;
  const languages = getUniqueLanguages().length;
  const coverage = calculateOverallCoverage();
  const org = sampleData.organizations[0];
  const employees = org.employeeCount;

  animateValue(document.getElementById("hero-markets"), 0, markets, 1000);
  animateValue(document.getElementById("hero-languages"), 0, languages, 1200);
  animateValue(
    document.getElementById("hero-coverage"),
    0,
    coverage,
    1400,
    "%"
  );
  animateValue(document.getElementById("hero-employees"), 0, employees, 1600);
}

function updateMetricCards() {
  const coverage = calculateOverallCoverage();
  const proficiency = calculateAverageProficiency();
  const gaps = sampleData.coverageGaps.filter(
    (g) => g.impact === "high"
  ).length;
  const opportunities = sampleData.markets.filter(
    (m) => m.priority === "high" && m.coverageScore < 70
  ).length;

  animateValue(
    document.getElementById("market-coverage-value"),
    0,
    coverage,
    1000,
    "%"
  );
  animateValue(
    document.getElementById("proficiency-value"),
    0,
    proficiency,
    1200,
    "%"
  );
  animateValue(document.getElementById("gaps-value"), 0, gaps, 1400);
  animateValue(
    document.getElementById("opportunities-value"),
    0,
    opportunities,
    1600
  );
}

function calculateAverageProficiency() {
  const org = sampleData.organizations[0];
  const proficiencyScores = {
    native: 100,
    fluent: 85,
    professional: 70,
    intermediate: 50,
    basic: 30,
  };

  let totalScore = 0;
  let totalCount = 0;

  org.departments.forEach((dept) => {
    dept.languages.forEach((lang) => {
      totalScore += proficiencyScores[lang.proficiency] * lang.speakerCount;
      totalCount += lang.speakerCount;
    });
  });

  return Math.round(totalScore / totalCount);
}

function initializeCharts() {
  // Set global Chart.js defaults for consistent styling
  if (window.Chart) {
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 13;
    Chart.defaults.color = "#616161";
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.padding = 15;
  }
}

function renderCoverageChart() {
  const ctx = document.getElementById("coverage-chart");
  if (!ctx) return;

  const regions = {};
  sampleData.markets.forEach((market) => {
    if (!regions[market.region]) {
      regions[market.region] = { total: 0, count: 0 };
    }
    regions[market.region].total += market.coverageScore;
    regions[market.region].count += 1;
  });

  const labels = Object.keys(regions);
  const data = labels.map((region) =>
    Math.round(regions[region].total / regions[region].count)
  );

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Average Coverage",
          data: data,
          backgroundColor: "rgba(13, 71, 161, 0.8)",
          borderColor: "rgba(13, 71, 161, 1)",
          borderWidth: 0,
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(33, 33, 33, 0.95)",
          padding: 12,
          borderRadius: 8,
          titleFont: { size: 14, weight: "600" },
          bodyFont: { size: 13 },
          callbacks: {
            label: (context) => `Coverage: ${context.parsed.y}%`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
          ticks: {
            callback: (value) => value + "%",
            padding: 8,
          },
        },
        x: {
          grid: { display: false, drawBorder: false },
          ticks: { padding: 8 },
        },
      },
    },
  });
}

function renderPriorityChart() {
  const ctx = document.getElementById("priority-chart");
  if (!ctx) return;

  const priorities = { high: 0, medium: 0, low: 0 };
  sampleData.markets.forEach((market) => priorities[market.priority]++);

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["High Priority", "Medium Priority", "Low Priority"],
      datasets: [
        {
          data: [priorities.high, priorities.medium, priorities.low],
          backgroundColor: [
            "rgba(211, 47, 47, 0.8)",
            "rgba(255, 179, 0, 0.8)",
            "rgba(2, 136, 209, 0.8)",
          ],
          borderWidth: 0,
          hoverOffset: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: { padding: 20, font: { size: 13, weight: "500" } },
        },
        tooltip: {
          backgroundColor: "rgba(33, 33, 33, 0.95)",
          padding: 12,
          borderRadius: 8,
          callbacks: {
            label: (context) => `${context.label}: ${context.parsed} markets`,
          },
        },
      },
    },
  });
}

function initializeVisualizations() {
  // Add region filter functionality
  const regionFilter = document.getElementById("region-filter");
  if (regionFilter) {
    regionFilter.addEventListener("change", (e) => {
      // Update chart based on selected region
      console.log("Filter changed:", e.target.value);
    });
  }
}

function renderHeatmap() {
  const container = document.getElementById("heatmap-container");
  if (!container) return;

  const org = sampleData.organizations[0];
  const departments = org.departments;
  const languageCodes = getUniqueLanguages();
  const languages = languageCodes
    .map((code) => sampleData.languages.find((l) => l.code === code))
    .filter((l) => l);

  const margin = { top: 60, right: 20, bottom: 20, left: 180 };
  const cellSize = 70;
  const width = languages.length * cellSize + margin.left + margin.right;
  const height = departments.length * cellSize + margin.top + margin.bottom;

  container.innerHTML = "";

  const svg = d3
    .select("#heatmap-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const proficiencyColors = {
    none: "#F5F5F5",
    basic: "#FFCDD2",
    intermediate: "#FFE082",
    professional: "#90CAF9",
    fluent: "#9FA8DA",
    native: "#A5D6A7",
  };

  // Build matrix
  const matrix = departments.flatMap((dept) =>
    languages.map((lang) => {
      const langData = dept.languages.find((l) => l.code === lang.code);
      return {
        department: dept.name,
        language: lang.name,
        proficiency: langData ? langData.proficiency : "none",
        speakers: langData ? langData.speakerCount : 0,
      };
    })
  );

  // Language labels (top)
  g.selectAll(".lang-label")
    .data(languages)
    .enter()
    .append("text")
    .text((d) => d.name)
    .attr("x", (d, i) => i * cellSize + cellSize / 2)
    .attr("y", -12)
    .attr("text-anchor", "end")
    .attr(
      "transform",
      (d, i) => `rotate(-35, ${i * cellSize + cellSize / 2}, -12)`
    )
    .style("font-size", "13px")
    .style("font-weight", "500")
    .style("fill", "#616161");

  // Department labels (left)
  g.selectAll(".dept-label")
    .data(departments)
    .enter()
    .append("text")
    .text((d) => d.name)
    .attr("x", -12)
    .attr("y", (d, i) => i * cellSize + cellSize / 2 + 5)
    .attr("text-anchor", "end")
    .style("font-size", "13px")
    .style("font-weight", "500")
    .style("fill", "#616161");

  // Cells
  const cells = g
    .selectAll(".cell")
    .data(matrix)
    .enter()
    .append("g")
    .attr("class", "cell")
    .attr("transform", (d, i) => {
      const col = i % languages.length;
      const row = Math.floor(i / languages.length);
      return `translate(${col * cellSize},${row * cellSize})`;
    })
    .style("cursor", "pointer");

  cells
    .append("rect")
    .attr("width", cellSize - 4)
    .attr("height", cellSize - 4)
    .attr("rx", 6)
    .attr("fill", (d) => proficiencyColors[d.proficiency])
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .style("transition", "all 0.2s")
    .on("mouseenter", function () {
      d3.select(this).attr("stroke", "#0D47A1").attr("stroke-width", 3);
    })
    .on("mouseleave", function () {
      d3.select(this).attr("stroke", "#fff").attr("stroke-width", 2);
    });

  cells
    .append("text")
    .text((d) => (d.speakers > 0 ? d.speakers : ""))
    .attr("x", cellSize / 2)
    .attr("y", cellSize / 2 + 6)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "700")
    .style("fill", "#212121")
    .style("pointer-events", "none");

  cells
    .append("title")
    .text(
      (d) =>
        `${d.department}\n${d.language}\nProficiency: ${d.proficiency}\nSpeakers: ${d.speakers}`
    );
}

function renderCoverageGrid() {
  const container = document.getElementById("coverage-grid");
  if (!container) return;

  const org = sampleData.organizations[0];
  const languageCoverage = {};

  org.departments.forEach((dept) => {
    dept.languages.forEach((lang) => {
      if (!languageCoverage[lang.code]) {
        languageCoverage[lang.code] = {
          ...lang,
          totalSpeakers: 0,
          departments: 0,
        };
      }
      languageCoverage[lang.code].totalSpeakers += lang.speakerCount;
      languageCoverage[lang.code].departments++;
    });
  });

  const languages = Object.values(languageCoverage);

  container.innerHTML = languages
    .map((lang) => {
      const details = sampleData.languages.find((l) => l.code === lang.code);
      return `
            <div class="coverage-card">
                <div class="coverage-header">
                    <div class="coverage-flag">${
                      details ? details.flag : "🌐"
                    }</div>
                    <div class="coverage-name">${lang.name}</div>
                </div>
                <div class="coverage-stats">
                    <div class="coverage-stat">
                        <span class="coverage-stat-label">Total Speakers</span>
                        <span class="coverage-stat-value">${
                          lang.totalSpeakers
                        }</span>
                    </div>
                    <div class="coverage-stat">
                        <span class="coverage-stat-label">Departments</span>
                        <span class="coverage-stat-value">${
                          lang.departments
                        } of ${org.departments.length}</span>
                    </div>
                    <div class="coverage-stat">
                        <span class="coverage-stat-label">Proficiency</span>
                        <span class="proficiency-badge badge-${
                          lang.proficiency
                        }">${lang.proficiency}</span>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

function renderProficiencyDistChart() {
  const ctx = document.getElementById("proficiency-dist-chart");
  if (!ctx) return;

  const org = sampleData.organizations[0];
  const counts = {
    native: 0,
    fluent: 0,
    professional: 0,
    intermediate: 0,
    basic: 0,
  };

  org.departments.forEach((dept) => {
    dept.languages.forEach((lang) => {
      counts[lang.proficiency] =
        (counts[lang.proficiency] || 0) + lang.speakerCount;
    });
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Native", "Fluent", "Professional", "Intermediate", "Basic"],
      datasets: [
        {
          label: "Speaker Count",
          data: [
            counts.native,
            counts.fluent,
            counts.professional,
            counts.intermediate,
            counts.basic,
          ],
          backgroundColor: [
            "rgba(0, 200, 83, 0.8)",
            "rgba(99, 102, 241, 0.8)",
            "rgba(2, 136, 209, 0.8)",
            "rgba(255, 179, 0, 0.8)",
            "rgba(211, 47, 47, 0.8)",
          ],
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(33, 33, 33, 0.95)",
          padding: 12,
          borderRadius: 8,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(0, 0, 0, 0.05)", drawBorder: false },
          ticks: { padding: 8 },
        },
        x: {
          grid: { display: false, drawBorder: false },
          ticks: { padding: 8 },
        },
      },
    },
  });
}

function renderOpportunityMatrix() {
  const container = document.getElementById("opportunity-matrix");
  if (!container) return;

  container.innerHTML = "";

  const width = container.clientWidth || 900;
  const height = 500;
  const margin = { top: 40, right: 60, bottom: 70, left: 70 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3
    .select("#opportunity-matrix")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Scales
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);

  const yScale = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

  const sizeScale = d3
    .scaleSqrt()
    .domain([0, d3.max(sampleData.markets, (d) => d.gdp)])
    .range([8, 45]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(["high", "medium", "low"])
    .range(["#D32F2F", "#FFB300", "#0288D1"]);

  // Axes
  g.append("g")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(10))
    .style("font-size", "12px")
    .style("color", "#757575");

  g.append("text")
    .attr("x", innerWidth / 2)
    .attr("y", innerHeight + 50)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .style("fill", "#424242")
    .text("Opportunity Score →");

  g.append("g")
    .call(d3.axisLeft(yScale).ticks(10))
    .style("font-size", "12px")
    .style("color", "#757575");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -innerHeight / 2)
    .attr("y", -50)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .style("fill", "#424242")
    .text("← Current Coverage");

  // Bubbles
  const bubbles = g
    .selectAll(".bubble")
    .data(sampleData.markets)
    .enter()
    .append("g")
    .attr("class", "bubble")
    .attr(
      "transform",
      (d) => `translate(${xScale(d.opportunity)},${yScale(d.coverageScore)})`
    )
    .style("cursor", "pointer");

  bubbles
    .append("circle")
    .attr("r", 0)
    .attr("fill", (d) => colorScale(d.priority))
    .attr("fill-opacity", 0.7)
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .transition()
    .duration(800)
    .delay((d, i) => i * 50)
    .attr("r", (d) => sizeScale(d.gdp));

  bubbles
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.3em")
    .style("font-size", "11px")
    .style("font-weight", "700")
    .style("fill", "#fff")
    .style("pointer-events", "none")
    .text((d) => d.name.substring(0, 3).toUpperCase())
    .style("opacity", 0)
    .transition()
    .duration(800)
    .delay((d, i) => i * 50)
    .style("opacity", 1);

  bubbles
    .append("title")
    .text(
      (d) =>
        `${d.name}\nOpportunity: ${d.opportunity}\nCoverage: ${d.coverageScore}%\nGDP: $${d.gdp}B`
    );

  bubbles
    .on("mouseenter", function () {
      d3.select(this)
        .select("circle")
        .transition()
        .duration(200)
        .attr("stroke-width", 4)
        .attr("fill-opacity", 0.9);
    })
    .on("mouseleave", function () {
      d3.select(this)
        .select("circle")
        .transition()
        .duration(200)
        .attr("stroke-width", 2)
        .attr("fill-opacity", 0.7);
    });
}

function renderMarketsList() {
  const container = document.getElementById("markets-list");
  if (!container) return;

  const sorted = [...sampleData.markets].sort(
    (a, b) => b.opportunity - a.opportunity
  );

  container.innerHTML = sorted
    .map(
      (market) => `
        <div class="market-card">
            <div class="market-header">
                <div class="market-name">${market.name}</div>
                <div class="market-priority priority-${market.priority}">${market.priority}</div>
            </div>
            <div class="market-metrics">
                <div class="market-metric">
                    <div class="market-metric-label">Coverage</div>
                    <div class="market-metric-value">${market.coverageScore}%</div>
                </div>
                <div class="market-metric">
                    <div class="market-metric-label">Opportunity</div>
                    <div class="market-metric-value">${market.opportunity}</div>
                </div>
                <div class="market-metric">
                    <div class="market-metric-label">GDP</div>
                    <div class="market-metric-value">$${market.gdp}B</div>
                </div>
                <div class="market-metric">
                    <div class="market-metric-label">Region</div>
                    <div class="market-metric-value">${market.region}</div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function renderInsightsGrid() {
  const container = document.getElementById("insights-grid");
  if (!container) return;

  const insights = sampleData.coverageGaps.map((gap) => ({
    title: `Address ${gap.language} Coverage Gap in ${gap.market}`,
    category: gap.impact.toUpperCase() + " PRIORITY",
    description: gap.recommendation,
    icon: gap.impact === "high" ? "alert" : "info",
  }));

  container.innerHTML = insights
    .map(
      (insight) => `
        <div class="insight-card">
            <div class="insight-header">
                <div class="insight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke-width="2"/>
                        <line x1="12" y1="9" x2="12" y2="13" stroke-width="2"/>
                        <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2"/>
                    </svg>
                </div>
                <div>
                    <div class="insight-category">${insight.category}</div>
                    <div class="insight-title">${insight.title}</div>
                </div>
            </div>
            <p class="insight-description">${insight.description}</p>
            <a href="#" class="insight-action">
                View details →
            </a>
        </div>
    `
    )
    .join("");
}

// Utility functions
function getUniqueLanguages() {
  const org = sampleData.organizations[0];
  const codes = new Set();
  org.departments.forEach((dept) => {
    dept.languages.forEach((lang) => codes.add(lang.code));
  });
  return Array.from(codes);
}

function calculateOverallCoverage() {
  const total = sampleData.markets.reduce((sum, m) => sum + m.coverageScore, 0);
  return Math.round(total / sampleData.markets.length);
}
