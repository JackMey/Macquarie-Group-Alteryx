import { AlteryxWorkflowAction, AlteryxWorkflowActionTypes } from './alteryx-workflow-actions';
import { AlteryxWorkflow } from '~/models';

export interface AlterxWorkflowState {
  alteryxWorkflows: Array<AlteryxWorkflow>;
  selectedWorkflow: string;
  scrollProgress: string;
}

const initialState: AlterxWorkflowState = {
  alteryxWorkflows: [],
  selectedWorkflow: '',
  scrollProgress: '',
};

export function alteryxWorkflowReducer(state: AlterxWorkflowState = initialState, action: AlteryxWorkflowAction): AlterxWorkflowState {
  switch (action.type) {
    case AlteryxWorkflowActionTypes.ADD_ALTERYX_WORKFLOW: {
      const alteryxWorkflows = [...state.alteryxWorkflows, action.payload];
      const selectedWorkflow = state.selectedWorkflow === '' ? action.payload.id : state.selectedWorkflow;

      localStorage.setItem('workflows', JSON.stringify(alteryxWorkflows));
      localStorage.setItem('selectedWorkflow', selectedWorkflow);

      return {
        ...state,
        alteryxWorkflows: alteryxWorkflows,
        selectedWorkflow,
      };
    }

    case AlteryxWorkflowActionTypes.LOAD_ALTERYX_WORKFLOW: {
      const selectedWorkflow = localStorage.getItem('selectedWorkflow') || '';
      const storedWorkflows = localStorage.getItem('workflows') || '[]';
      const alteryxWorkflows = JSON.parse(storedWorkflows);

      return {
        ...state,
        alteryxWorkflows,
        selectedWorkflow,
      };
    }

    case AlteryxWorkflowActionTypes.DELETE_ALTERYX_WORKFLOW: {
      const newWorkflows = state.alteryxWorkflows.filter((workflow) => workflow.id !== action.payload);

      localStorage.setItem('workflows', JSON.stringify(newWorkflows));
      localStorage.setItem('selectedWorkflow', '');

      return {
        ...state,
        alteryxWorkflows: newWorkflows,
        selectedWorkflow: '',
      };
    }

    case AlteryxWorkflowActionTypes.SELECT_ALTERYX_WORKFLOW: {
      localStorage.setItem('selectedWorkflow', action.payload);

      return {
        ...state,
        selectedWorkflow: action.payload,
        scrollProgress: '',
      };
    }

    case AlteryxWorkflowActionTypes.SET_SCROLL_PROGRESS: {
      return {
        ...state,
        scrollProgress: action.payload,
      };
    }

    default:
      return state;
  }
}
