// Use type safe message keys with `next-intl`
import type Message from "../messages/en.json";

type Messages = typeof Message;
declare interface IntlMessages extends Messages {}
