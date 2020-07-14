import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class DropdownMenuLinkComponent extends Component {
  @action
  handleClick() {
    this.args.onClick?.();
  }
}
