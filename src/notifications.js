/**
 * A notification page component
 */
class NotificationPageComponent {
  #markReadBtn = /** @type {HTMLButtonElement} */ (
    document.querySelector('.notification--page_removed-btn')
  );
  #notifications = /** @type {NodeList} */ (
    document.querySelectorAll('.notification--page_activity')
  );

  /**
   * Constructor expects no argument. When called an event listener is added to the button.
   */
  constructor() {
    this.#markReadBtn.addEventListener(
      'click',
      this.#readNotifications.bind(this)
    );
  }

  /**
   * @param {Event} evtObj
   */
  #readNotifications(evtObj) {
    this.#notifications.forEach(function (notification) {
      const notificationElement = /** @type {HTMLElement }*/ (notification);
      if (notificationElement.classList.contains('unread')) {
        notificationElement.classList.remove('unread');
        notificationElement.classList.add('read');

        // We need to get the number of notifications which is currently on 3 and set the value to 0 meaning the user no longer has any notifications
        const notificationAmount = /** @type {HTMLElement} */ (
          document.querySelector('.notification--page_amount > span')
        );
        notificationAmount.textContent = '0';
      }
    });
  }
}

new NotificationPageComponent();
