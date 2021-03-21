import AssistanceScreen from "../screens/AssistanceScreen";
import TopTabs from "../navigation/TopTabs";

/**
 * Implement Redux or Context
 */
const isActive = true;
let RenderScreen;
if (isActive) {
  RenderScreen = AssistanceScreen;
} else {
  RenderScreen = TopTabs;
}
export default RenderScreen;
