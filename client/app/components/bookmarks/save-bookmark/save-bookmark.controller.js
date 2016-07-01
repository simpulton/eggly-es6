class SaveController {
  $onChanges(changesObj) {
    this.editedBookmark = Object.assign({}, this.bookmark);
  }
}

export default SaveController;
