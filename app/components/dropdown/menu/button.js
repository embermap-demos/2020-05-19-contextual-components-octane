import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class DropdownMenuButtonComponent extends Component {
  @action
  onClick() {
    this.args.onClick?.();

    if (this.args.shouldCloseMenu !== false) {
      this.args.closeMenu();
    }
  }
}
