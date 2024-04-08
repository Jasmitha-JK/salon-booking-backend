export interface Availability {
    day: string; // Day of the week (e.g., "Monday")
    slots: {
      start: string; // Time of the slot (e.g., "09:00")
      end: string; // Time of the slot (e.g., "10:00")
      maxCapacity: number; // Maximum number of bookings allowed for the slot
    }[];
  }
  