// BBrown Strategic Globalization Platform - Main Application

// Page Navigation
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  initializeNavigation();
});

function initializeApp() {
  updateDashboardStats();
  renderCoverageChart();
  renderMarketChart();
  renderLanguageHeatmap();
  renderOrganizationSelector();
  renderLanguageGrid();
  renderProficiencyChart();
  renderOpportunityMatrix();
  renderMarketList();
}

function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links and pages
      navLinks.forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(".page")
        .forEach((p) => p.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Show corresponding page
      const pageId = this.getAttribute("data-page") + "-page";
      document.getElementById(pageId).classList.add("active");
    });
  });
}

// Dashboard Stats
function updateDashboardStats() {
  const markets = sampleData.markets.length;
  const languages = getUniqueLanguages().length;
  const avgCoverage = calculateOverallCoverage();
  const gaps = sampleData.coverageGaps.filter(
    (g) => g.impact === "high"
  ).length;

  document.getElementById("markets-count").textContent = markets;
  document.getElementById("languages-count").textContent = languages;
  document.getElementById("avg-coverage").textContent = avgCoverage + "%";
  document.getElementById("gaps-count").textContent = gaps;
}

// Coverage Chart
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
          label: "Average Coverage %",
          data: data,
          backgroundColor: "rgba(37, 99, 235, 0.8)",
          borderColor: "rgba(37, 99, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// Market Distribution Chart
function renderMarketChart() {
  const ctx = document.getElementById("market-chart");
  if (!ctx) return;

  const priorities = { high: 0, medium: 0, low: 0 };
  sampleData.markets.forEach((market) => {
    priorities[market.priority]++;
  });

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["High Priority", "Medium Priority", "Low Priority"],
      datasets: [
        {
          data: [priorities.high, priorities.medium, priorities.low],
          backgroundColor: [
            "rgba(239, 68, 68, 0.8)",
            "rgba(245, 158, 11, 0.8)",
            "rgba(59, 130, 246, 0.8)",
          ],
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

// Language Heatmap
function renderLanguageHeatmap() {
  const container = document.getElementById("heatmap");
  if (!container) return;

  const org = sampleData.organizations[0];
  const departments = org.departments;
  const allLanguages = getUniqueLanguages();

  const languageDetails = allLanguages
    .map((code) => sampleData.languages.find((l) => l.code === code))
    .filter((l) => l);

  const margin = { top: 80, right: 40, bottom: 40, left: 150 };
  const cellSize = 60;
  const width = languageDetails.length * cellSize + margin.left + margin.right;
  const height = departments.length * cellSize + margin.top + margin.bottom;

  container.innerHTML = "";

  const svg = d3
    .select("#heatmap")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Color scale
  const proficiencyLevels = [
    "none",
    "basic",
    "intermediate",
    "professional",
    "fluent",
    "native",
  ];
  const colorScale = d3
    .scaleOrdinal()
    .domain(proficiencyLevels)
    .range(["#f3f4f6", "#fecaca", "#fed7aa", "#bfdbfe", "#93c5fd", "#86efac"]);

  // Build data matrix
  const matrix = departments
    .map((dept) => {
      return languageDetails.map((lang) => {
        const langData = dept.languages.find((l) => l.code === lang.code);
        return {
          department: dept.name,
          language: lang.name,
          proficiency: langData ? langData.proficiency : "none",
          speakers: langData ? langData.speakerCount : 0,
        };
      });
    })
    .flat();

  // X axis - Languages
  g.selectAll(".lang-label")
    .data(languageDetails)
    .enter()
    .append("text")
    .text((d) => d.name)
    .attr("x", (d, i) => i * cellSize + cellSize / 2)
    .attr("y", -10)
    .attr("text-anchor", "end")
    .attr(
      "transform",
      (d, i) => `rotate(-45, ${i * cellSize + cellSize / 2}, -10)`
    )
    .style("font-size", "12px")
    .style("fill", "#374151");

  // Y axis - Departments
  g.selectAll(".dept-label")
    .data(departments)
    .enter()
    .append("text")
    .text((d) => d.name)
    .attr("x", -10)
    .attr("y", (d, i) => i * cellSize + cellSize / 2 + 5)
    .attr("text-anchor", "end")
    .style("font-size", "12px")
    .style("fill", "#374151");

  // Cells
  const cells = g
    .selectAll(".heatmap-cell")
    .data(matrix)
    .enter()
    .append("g")
    .attr("class", "heatmap-cell")
    .attr("transform", (d, i) => {
      const col = i % languageDetails.length;
      const row = Math.floor(i / languageDetails.length);
      return `translate(${col * cellSize},${row * cellSize})`;
    });

  cells
    .append("rect")
    .attr("width", cellSize - 2)
    .attr("height", cellSize - 2)
    .attr("fill", (d) => colorScale(d.proficiency))
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .attr("rx", 4);

  cells
    .append("text")
    .text((d) => (d.speakers > 0 ? d.speakers : ""))
    .attr("x", cellSize / 2)
    .attr("y", cellSize / 2 + 5)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .style("fill", "#1f2937");

  // Add tooltip on hover
  cells
    .append("title")
    .text(
      (d) =>
        `${d.department}\n${d.language}\n${d.proficiency}\n${d.speakers} speakers`
    );
}

// Organization Selector and Map
function renderOrganizationSelector() {
  const selector = document.getElementById("org-selector");
  if (!selector) return;

  sampleData.organizations.forEach((org) => {
    const option = document.createElement("option");
    option.value = org.id;
    option.textContent = org.name;
    selector.appendChild(option);
  });

  selector.addEventListener("change", function () {
    if (this.value) {
      renderOrganizationMap(this.value);
      renderDepartmentDetails(this.value);
    }
  });

  // Render first org by default
  if (sampleData.organizations.length > 0) {
    selector.value = sampleData.organizations[0].id;
    renderOrganizationMap(sampleData.organizations[0].id);
    renderDepartmentDetails(sampleData.organizations[0].id);
  }
}

function renderOrganizationMap(orgId) {
  const container = document.getElementById("org-map");
  if (!container) return;

  const org = sampleData.organizations.find((o) => o.id === orgId);
  if (!org) return;

  container.innerHTML = "";

  const width = container.clientWidth || 800;
  const height = 500;

  const svg = d3
    .select("#org-map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create hierarchical data
  const hierarchyData = {
    name: org.name,
    children: org.departments.map((dept) => ({
      name: dept.name,
      value: dept.employeeCount,
      languages: dept.languages.length,
    })),
  };

  const root = d3.hierarchy(hierarchyData).sum((d) => d.value);

  const pack = d3
    .pack()
    .size([width - 40, height - 40])
    .padding(10);

  pack(root);

  const nodes = svg
    .selectAll(".org-node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "org-node")
    .attr("transform", (d) => `translate(${d.x + 20},${d.y + 20})`);

  nodes
    .append("circle")
    .attr("r", (d) => d.r)
    .attr("fill", (d, i) =>
      d.depth === 0 ? "#2563eb" : `hsl(${i * 60}, 70%, 65%)`
    )
    .attr("fill-opacity", 0.7)
    .attr("stroke", "#fff")
    .attr("stroke-width", 2);

  nodes
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.3em")
    .style("font-size", (d) => Math.min(d.r / 3, 14) + "px")
    .style("font-weight", "600")
    .style("fill", "#fff")
    .text((d) => d.data.name);

  nodes
    .filter((d) => d.depth > 0)
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "1.5em")
    .style("font-size", "11px")
    .style("fill", "#fff")
    .text((d) => `${d.data.value} employees`);
}

function renderDepartmentDetails(orgId) {
  const container = document.getElementById("dept-list");
  if (!container) return;

  const org = sampleData.organizations.find((o) => o.id === orgId);
  if (!org) return;

  container.innerHTML = org.departments
    .map(
      (dept) => `
        <div class="dept-card">
            <h4>${dept.name}</h4>
            <div class="dept-info">
                <span>👥 ${dept.employeeCount} employees</span>
                <span>🗣️ ${dept.languages.length} languages</span>
            </div>
        </div>
    `
    )
    .join("");
}

// Language Grid
function renderLanguageGrid() {
  const container = document.getElementById("language-grid");
  if (!container) return;

  const org = sampleData.organizations[0];
  const languageCoverage = {};

  // Calculate coverage per language
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
            <div class="language-card">
                <div class="language-header">
                    <div class="language-flag">${
                      details ? details.flag : "🌐"
                    }</div>
                    <div class="language-name">${lang.name}</div>
                </div>
                <div class="language-stats">
                    <div class="language-stat">
                        <span class="language-stat-label">Total Speakers</span>
                        <span class="language-stat-value">${
                          lang.totalSpeakers
                        }</span>
                    </div>
                    <div class="language-stat">
                        <span class="language-stat-label">Departments</span>
                        <span class="language-stat-value">${
                          lang.departments
                        }</span>
                    </div>
                    <div class="language-stat">
                        <span class="language-stat-label">Proficiency</span>
                        <span class="proficiency-badge proficiency-${
                          lang.proficiency
                        }">${lang.proficiency}</span>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

// Proficiency Chart
function renderProficiencyChart() {
  const ctx = document.getElementById("proficiency-chart");
  if (!ctx) return;

  const org = sampleData.organizations[0];
  const proficiencyCounts = {
    native: 0,
    fluent: 0,
    professional: 0,
    intermediate: 0,
    basic: 0,
  };

  org.departments.forEach((dept) => {
    dept.languages.forEach((lang) => {
      proficiencyCounts[lang.proficiency] =
        (proficiencyCounts[lang.proficiency] || 0) + lang.speakerCount;
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
            proficiencyCounts.native,
            proficiencyCounts.fluent,
            proficiencyCounts.professional,
            proficiencyCounts.intermediate,
            proficiencyCounts.basic,
          ],
          backgroundColor: [
            "rgba(16, 185, 129, 0.8)",
            "rgba(59, 130, 246, 0.8)",
            "rgba(99, 102, 241, 0.8)",
            "rgba(245, 158, 11, 0.8)",
            "rgba(239, 68, 68, 0.8)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// Opportunity Matrix
function renderOpportunityMatrix() {
  const container = document.getElementById("opportunity-matrix");
  if (!container) return;

  container.innerHTML = "";

  const width = container.clientWidth || 800;
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };

  const svg = d3
    .select("#opportunity-matrix")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);

  const yScale = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

  const sizeScale = d3
    .scaleSqrt()
    .domain([0, d3.max(sampleData.markets, (d) => d.gdp)])
    .range([5, 40]);

  // Axes
  g.append("g")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("x", innerWidth / 2)
    .attr("y", 40)
    .attr("fill", "#374151")
    .attr("text-anchor", "middle")
    .text("Opportunity Score");

  g.append("g")
    .call(d3.axisLeft(yScale))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -innerHeight / 2)
    .attr("y", -40)
    .attr("fill", "#374151")
    .attr("text-anchor", "middle")
    .text("Current Coverage");

  // Bubbles
  const bubbles = g
    .selectAll(".market-bubble")
    .data(sampleData.markets)
    .enter()
    .append("g")
    .attr("class", "market-bubble")
    .attr(
      "transform",
      (d) => `translate(${xScale(d.opportunity)},${yScale(d.coverageScore)})`
    );

  bubbles
    .append("circle")
    .attr("r", (d) => sizeScale(d.gdp))
    .attr("fill", (d) => getPriorityColor(d.priority))
    .attr("fill-opacity", 0.6)
    .attr("stroke", "#fff")
    .attr("stroke-width", 2);

  bubbles
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.3em")
    .style("font-size", "10px")
    .style("font-weight", "600")
    .style("fill", "#fff")
    .text((d) => d.name.substring(0, 3).toUpperCase());

  bubbles
    .append("title")
    .text(
      (d) =>
        `${d.name}\nOpportunity: ${d.opportunity}\nCoverage: ${d.coverageScore}%\nGDP: $${d.gdp}B`
    );
}

// Market List
function renderMarketList() {
  const container = document.getElementById("market-list");
  if (!container) return;

  const sortedMarkets = [...sampleData.markets].sort(
    (a, b) => b.opportunity - a.opportunity
  );

  container.innerHTML = sortedMarkets
    .map(
      (market) => `
        <div class="market-card">
            <div class="market-header">
                <div class="market-name">${market.name}</div>
                <div class="market-priority priority-${
                  market.priority
                }">${market.priority.toUpperCase()}</div>
            </div>
            <div class="market-metrics">
                <div class="market-metric">
                    <div class="metric-label">Coverage</div>
                    <div class="metric-value">${market.coverageScore}%</div>
                </div>
                <div class="market-metric">
                    <div class="metric-label">Opportunity</div>
                    <div class="metric-value">${market.opportunity}</div>
                </div>
                <div class="market-metric">
                    <div class="metric-label">GDP</div>
                    <div class="metric-value">$${market.gdp}B</div>
                </div>
                <div class="market-metric">
                    <div class="metric-label">Region</div>
                    <div class="metric-value">${market.region}</div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}
