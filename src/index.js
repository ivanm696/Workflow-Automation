#!/usr/bin/env node

import process from 'node:process';

export function getWorkflowSummary() {
  return [
    {
      name: 'ci-check',
      description: 'Validate the project and ensure the repository is in a healthy state',
    },
    {
      name: 'deploy-preview',
      description: 'Prepare a build artifact and validate deployment configuration',
    },
    {
      name: 'notify-status',
      description: 'Send a compact status summary to the configured channel',
    },
  ];
}

export function listWorkflows() {
  return getWorkflowSummary().map((workflow) => `${workflow.name}: ${workflow.description}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Workflow Automation');
  console.log('Available workflows:');
  for (const workflow of listWorkflows()) {
    console.log(`- ${workflow}`);
  }
}
