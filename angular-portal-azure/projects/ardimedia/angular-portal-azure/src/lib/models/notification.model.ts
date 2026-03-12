/**
 * Notification panel definition.
 * Ported from AreaNotification in v0.2.346.
 */

/** Lifecycle hooks for the notification panel */
export interface NotificationLifecycle {
  /** Called before hide; return false to prevent hiding */
  onHide?: () => boolean;
  /** Called before showing */
  onShow?: () => void;
  /** Called after the panel is shown */
  onShowed?: () => void;
}

export interface NotificationDefinition {
  /** Path/identifier for the content shown in the notification area */
  path: string;
  /** Panel width in pixels (default 250) */
  width: number;
  /** Whether the notification panel is currently visible */
  isVisible: boolean;
  /** Background color (default '#32383f') */
  backgroundColor: string;
  /** Optional lifecycle hooks invoked during show/hide transitions */
  lifecycle?: NotificationLifecycle;
}

export function createNotificationPanel(): NotificationDefinition {
  return {
    path: '',
    width: 250,
    isVisible: false,
    backgroundColor: '#32383f',
  };
}
