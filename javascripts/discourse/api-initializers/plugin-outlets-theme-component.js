import { apiInitializer } from 'discourse/lib/api';
import PluginOutletsHeaderIcon from "../components/plugin-outlets-header-icon";

export default apiInitializer('0.11.1', (api) => {
  let currentUser = api.getCurrentUser();
  if ((!settings.admin_only) || currentUser.admin) {
    api.headerIcons.add("plugin-outlets-header-icon", PluginOutletsHeaderIcon);
  }
  // if user is loged in only then show this before-header-panel
  if (currentUser) {
    console.log("currentUser", currentUser);
    
  }
});
