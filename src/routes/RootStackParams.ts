import IEvents from '../screens/EventsAdmin/index';

export type RootStackParamsList = {
  EventsUser: undefined;
  Login: undefined;
  Event: {eventId: string};
  RegisterEvent: {data: any};
  EventsAdmin: undefined;
};
