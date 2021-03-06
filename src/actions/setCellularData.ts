import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Cellular Data
 * @section Actions > Scripting > Device
 * @icon CellularData
 *
 * Sets the device’s Cellular Data to on or off.
 *
 * ```js
 * setCellularData({
 *   value: true,
 * });
 * ```
 */

const setCellularData = (
  {
    value = true,
  }: {
    /** Enable or disable cellular data */
    value?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.cellulardata.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setCellularData;
