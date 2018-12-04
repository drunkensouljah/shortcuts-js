import AssertionType from './AssertionType';
import WFAskActionDateGranularity from './WFAskActionDateGranularity';
import WFBase64LineBreakMode from './WFBase64LineBreakMode';
import WFCondition from './WFCondition';
import WFCountType from './WFCountType';
import WFDateActionMode from './WFDateActionMode';
import WFDateFormatStyle from './WFDateFormatStyle';
import WFDeviceDetail from './WFDeviceDetail';
import WFEncodeMode from './WFEncodeMode';
import WFFlashlightSetting from './WFFlashlightSetting';
import WFGetDictionaryValueType from './WFGetDictionaryValueType';
import WFHashType from './WFHashType';
import WFHTTPBodyType from './WFHTTPBodyType';
import WFHTTPMethod from './WFHTTPMethod';
import WFInputType from './WFInputType';
import WFIPAddressSourceOption from './WFIPAddressSourceOption';
import WFIPAddressTypeOption from './WFIPAddressTypeOption';
import WFMathOperation from './WFMathOperation';
import WFNetworkDetailsNetwork from './WFNetworkDetailsNetwork';
import WFRelativeDateFormatStyle from './WFRelativeDateFormatStyle';
import WFScientificMathOperation from './WFScientificMathOperation';
import WFSerialization from './WFSerialization';
import WFSkipBackBehavior from './WFSkipBackBehavior';
import WFStatisticsOperation from './WFStatisticsOperation';
import WFTimeFormatStyle from './WFTimeFormatStyle';

interface WFWorkflowActionParameters {
  Advanced?: boolean;
  AssertionType?: AssertionType;
  CustomOutputName?: string;
  Enabled?: boolean;
  Event?: WFSerialization | string;
  GroupingIdentifier?: string;
  OnValue?: boolean;
  ShowHeaders?: boolean;
  Text?: WFSerialization | string;
  Time?: string;
  UUID?: string;
  WFAlertActionCancelButtonShown?: boolean;
  WFAlertActionMessage?: WFSerialization | string;
  WFAlertActionTitle?: WFSerialization | string;
  WFAskActionDateGranularity?: WFAskActionDateGranularity;
  WFAskActionDefaultAnswer?: WFSerialization | string;
  WFAskActionPrompt?: WFSerialization | string;
  WFBase64LineBreakMode?: WFSerialization | WFBase64LineBreakMode;
  WFBrightness?: number;
  WFCommentActionText?: string;
  WFCondition?: WFCondition;
  WFConditionalActionString?: string;
  WFControlFlowMode?: number;
  WFCountType?: WFCountType;
  WFDateActionDate?: WFSerialization | string;
  WFDateActionMode?: WFSerialization | WFDateActionMode;
  WFDateFormat?: WFSerialization | string;
  WFDateFormatStyle?: WFSerialization | WFDateFormatStyle;
  WFDelayTime?: number;
  WFDeviceDetail?: WFSerialization | WFDeviceDetail;
  WFDictionaryKey?: string;
  WFDontIncludeFileExtension?: boolean;
  WFEncodeMode?: WFEncodeMode;
  WFFlashlightSetting?: WFFlashlightSetting;
  WFFormValues?: WFSerialization;
  WFGetDictionaryValueType?: WFGetDictionaryValueType;
  WFHashType?: WFSerialization | WFHashType;
  WFHTTPBodyType?: WFHTTPBodyType;
  WFHTTPHeaders?: WFSerialization;
  WFHTTPMethod?: WFHTTPMethod;
  WFInputType?: WFInputType;
  WFIPAddressSourceOption?: WFIPAddressSourceOption;
  WFIPAddressTypeOption?: WFIPAddressTypeOption;
  WFISO8601IncludeTime?: WFSerialization | boolean;
  WFJSONValues?: WFSerialization;
  WFMathOperand?: number;
  WFMathOperation?: WFMathOperation;
  WFMenuItems?: string[];
  WFMenuItemTitle?: string;
  WFMenuPrompt?: string;
  WFName?: string;
  WFNetworkDetailsNetwork?: WFNetworkDetailsNetwork;
  WFNotificationActionBody?: string;
  WFNotificationActionSound?: boolean;
  WFNotificationActionTitle?: string;
  WFNumberActionNumber?: number;
  WFNumberValue?: number;
  WFRandomNumberMaximum?: WFSerialization | number;
  WFRandomNumberMinimum?: WFSerialization | number;
  WFRelativeDateFormatStyle?: WFSerialization | WFRelativeDateFormatStyle;
  WFScientificMathOperand?: number;
  WFScientificMathOperation?: WFScientificMathOperation;
  WFShowWorkflow?: boolean;
  WFSSHHost?: WFSerialization | string;
  WFSSHPassword?: WFSerialization | string;
  WFSSHPort?: WFSerialization | string;
  WFSSHScript?: WFSerialization | string;
  WFSSHUser?: WFSerialization | string;
  WFSkipBackBehavior?: WFSkipBackBehavior;
  WFStatisticsOperation?: WFSerialization | WFStatisticsOperation;
  WFTextActionText?: WFSerialization | string;
  WFTimeFormatStyle?: WFSerialization | WFTimeFormatStyle;
  WFURLActionURL?: string;
  WFVariable?: WFSerialization | string;
  WFVariableName?: string;
  WFVolume?: number;
  WFWorkflowName?: string;
}

export default WFWorkflowActionParameters;
