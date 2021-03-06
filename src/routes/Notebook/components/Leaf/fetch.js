import React from 'react'
import { RawTextLeaf, actions as RawTextLeafActions } from './leaves/rawText'
import { CodeEditorLeaf, actions as CodeEditorLeafActions } from './leaves/code'

let leaves = {
  'rawText': {
    component: RawTextLeaf,
    actions: RawTextLeafActions
  },
  'code': {
    component: CodeEditorLeaf,
    actions: CodeEditorLeafActions
  }
}

// TODO: move to api
export let fetchActions = (type, data) => {
  return leaves[type].actions(data)
}

export let fetchComponent = (type, data, update, meta) => {
  return React.createElement(leaves[type].component, {
    data: data,
    meta: meta,
    update: update
  })
}
