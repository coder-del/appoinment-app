import {getItem, setItem} from '../lib/localStorage';

const APPOINTMENTS_KEY = 'appointments';

export const createAppointment = appointment => {
  return new Promise(async (resolve, reject) => {
    try {
      const {date, email, slot} = appointment;
      const appointments = (await getItem(APPOINTMENTS_KEY)) || {};

      appointments[date] = {
        ...(appointments[date] || {}),
        [slot]: email,
      };

      await setItem(APPOINTMENTS_KEY, appointments);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const getSlotByDate = date => {
  return new Promise(async (resolve, reject) => {
    try {
      const appointments = (await getItem(APPOINTMENTS_KEY)) || {};
      const appointmentByDate = appointments[date];
      resolve(appointmentByDate);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSlotByEmail = email => {
  return new Promise(async (resolve, reject) => {
    try {
      const appointments = (await getItem(APPOINTMENTS_KEY)) || {};

      const userAppointments = Object.entries(appointments)?.reduce(
        (accumulator, appointment) => {
          const [date, slotsObj] = appointment;
          const userSlots = Object.entries(slotsObj)?.filter(
            ([slot, slotEmail]) => slotEmail === email,
          );
          return {
            ...accumulator,
            [date]: userSlots,
          };
        },
        {},
      );

      resolve(userAppointments);
    } catch (error) {
      reject(error);
    }
  });
};
