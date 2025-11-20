'use client';

import React from 'react';
import type { OrgChartNode } from '@/types';
import { Building2, Users } from 'lucide-react';

interface OrganizationMapProps {
  nodes: OrgChartNode[];
}

export function OrganizationMap({ nodes }: OrganizationMapProps) {
  // Build tree structure from flat array
  const buildTree = (nodes: OrgChartNode[]): OrgChartNode[] => {
    const nodeMap = new Map<string, OrgChartNode & { children: OrgChartNode[] }>();
    const roots: (OrgChartNode & { children: OrgChartNode[] })[] = [];

    nodes.forEach(node => {
      nodeMap.set(node.id, { ...node, children: [] });
    });

    nodes.forEach(node => {
      const currentNode = nodeMap.get(node.id)!;
      if (node.parentId) {
        const parent = nodeMap.get(node.parentId);
        if (parent) {
          parent.children.push(currentNode);
        }
      } else {
        roots.push(currentNode);
      }
    });

    return roots;
  };

  const tree = buildTree(nodes);

  const renderNode = (node: OrgChartNode & { children?: OrgChartNode[] }, level: number = 0) => (
    <div key={node.id} className={`flex flex-col ${level > 0 ? 'ml-8 mt-4' : ''}`}>
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border-2 border-primary-200 hover:border-primary-400 transition">
        <div className="flex-shrink-0">
          <Building2 className="h-6 w-6 text-primary-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-consulting-dark">{node.name}</h4>
          {node.role && <p className="text-sm text-consulting-medium">{node.role}</p>}
          <p className="text-sm text-primary-600">{node.department}</p>
          {node.employeeCount && (
            <div className="flex items-center gap-1 mt-2 text-sm text-consulting-medium">
              <Users className="h-4 w-4" />
              <span>{node.employeeCount} employees</span>
            </div>
          )}
          {node.languageCapabilities && node.languageCapabilities.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {node.languageCapabilities.map(lang => (
                <span
                  key={lang}
                  className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col">
          {node.children.map(child => renderNode(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full bg-slate-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-consulting-dark mb-6">
        Organization Structure
      </h3>
      <div className="overflow-x-auto">
        {tree.map(root => renderNode(root))}
      </div>
    </div>
  );
}
