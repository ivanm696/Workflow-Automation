import test from 'node:test';
import assert from 'node:assert/strict';

import { getWorkflowSummary, listWorkflows } from './index.js';

test('workflow summary includes expected automation entries', () => {
  const workflows = getWorkflowSummary();

  assert.equal(workflows.length, 3);
  assert.deepEqual(
    workflows.map((workflow) => workflow.name),
    ['ci-check', 'deploy-preview', 'notify-status'],
  );
});

test('listWorkflows returns readable strings', () => {
  const workflows = listWorkflows();

  assert.equal(workflows.length, 3);
  assert.match(workflows[0], /ci-check/);
  assert.match(workflows[1], /deploy-preview/);
  assert.match(workflows[2], /notify-status/);
});
