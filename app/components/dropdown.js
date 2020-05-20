import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class DropdownComponent extends Component {
  @tracked isOpen = true;

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }

  @action
  closeMenu() {
    this.isOpen = false;
  }
}
