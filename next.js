function e36() {


    const currentGroup = document.querySelector(`[data-status="active"]`),

    nextGroup = this.querySelector(`[data-status="after"]`),

    prevGroup = document.querySelector(`[data-status="before"]`),

    backGroup = document.querySelector(`[data-status="back"]`);

    this.querySelector(`[data-status="active"]`).dataset.status = "after";
    prevGroup.dataset.status = "active";
    nextGroup.dataset.status = "back";
    backGroup.dataset.status = "before";

}