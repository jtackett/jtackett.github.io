// Compiled by ClojureScript 0.0-3208 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
goog.require('clojure.string');
goog.require('cljs_time.internal.core');
cljs_time.core._STAR_sys_time_STAR_ = null;
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 */
cljs_time.core.DateTimeProtocol = (function (){var obj15754 = {};
return obj15754;
})();

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.year[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.year["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.month[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.month["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.day[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.day["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.hour[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.hour["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.minute[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.minute["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.sec[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.sec["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.second[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.second["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.milli[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.milli["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.plus_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.minus_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});


/**
 * Interface for in-<time unit> functions
 */
cljs_time.core.InTimeUnitProtocol = (function (){var obj15756 = {};
return obj15756;
})();

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_millis["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_hours["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_days[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_days["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_months[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_months["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((function (){var and__4321__auto__ = this$;
if(and__4321__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1;
} else {
return and__4321__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__4969__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4333__auto__ = (cljs_time.core.in_years[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs_time.core.in_years["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} start
* @param {*} end
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4928__auto__,k__4929__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
return cljs.core._lookup.call(null,this__4928__auto____$1,k__4929__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4930__auto__,k15758,else__4931__auto__){
var self__ = this;
var this__4930__auto____$1 = this;
var G__15760 = (((k15758 instanceof cljs.core.Keyword))?k15758.fqn:null);
switch (G__15760) {
case "end":
return self__.end;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15758,else__4931__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4942__auto__,writer__4943__auto__,opts__4944__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
var pr_pair__4945__auto__ = ((function (this__4942__auto____$1){
return (function (keyval__4946__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4943__auto__,cljs.core.pr_writer,""," ","",opts__4944__auto__,keyval__4946__auto__);
});})(this__4942__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4943__auto__,pr_pair__4945__auto__,"#cljs-time.core.Interval{",", ","}",opts__4944__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4926__auto__){
var self__ = this;
var this__4926__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4922__auto__){
var self__ = this;
var this__4922__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4932__auto__){
var self__ = this;
var this__4932__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4923__auto__){
var self__ = this;
var this__4923__auto____$1 = this;
var h__4749__auto__ = self__.__hash;
if(!((h__4749__auto__ == null))){
return h__4749__auto__;
} else {
var h__4749__auto____$1 = cljs.core.hash_imap.call(null,this__4923__auto____$1);
self__.__hash = h__4749__auto____$1;

return h__4749__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4924__auto__,other__4925__auto__){
var self__ = this;
var this__4924__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4321__auto__ = other__4925__auto__;
if(cljs.core.truth_(and__4321__auto__)){
var and__4321__auto____$1 = (this__4924__auto____$1.constructor === other__4925__auto__.constructor);
if(and__4321__auto____$1){
return cljs.core.equiv_map.call(null,this__4924__auto____$1,other__4925__auto__);
} else {
return and__4321__auto____$1;
}
} else {
return and__4321__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4937__auto__,k__4938__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__4938__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4937__auto____$1),self__.__meta),k__4938__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4938__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4935__auto__,k__4936__auto__,G__15757){
var self__ = this;
var this__4935__auto____$1 = this;
var pred__15761 = cljs.core.keyword_identical_QMARK_;
var expr__15762 = k__4936__auto__;
if(cljs.core.truth_(pred__15761.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__15762))){
return (new cljs_time.core.Interval(G__15757,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15761.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__15762))){
return (new cljs_time.core.Interval(self__.start,G__15757,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4936__auto__,G__15757),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4940__auto__){
var self__ = this;
var this__4940__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4927__auto__,G__15757){
var self__ = this;
var this__4927__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__15757,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4933__auto__,entry__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4934__auto__)){
return cljs.core._assoc.call(null,this__4933__auto____$1,cljs.core._nth.call(null,entry__4934__auto__,(0)),cljs.core._nth.call(null,entry__4934__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4933__auto____$1,entry__4934__auto__);
}
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4962__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4962__auto__,writer__4963__auto__){
return cljs.core._write.call(null,writer__4963__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__15759){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__15759),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__15759),null,cljs.core.dissoc.call(null,G__15759,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 * Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"end","end",1372345569,null)))))].join('')));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
* @param {*} years
* @param {*} months
* @param {*} weeks
* @param {*} days
* @param {*} hours
* @param {*} minutes
* @param {*} seconds
* @param {*} millis
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4928__auto__,k__4929__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
return cljs.core._lookup.call(null,this__4928__auto____$1,k__4929__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4930__auto__,k15766,else__4931__auto__){
var self__ = this;
var this__4930__auto____$1 = this;
var G__15768 = (((k15766 instanceof cljs.core.Keyword))?k15766.fqn:null);
switch (G__15768) {
case "millis":
return self__.millis;

break;
case "seconds":
return self__.seconds;

break;
case "minutes":
return self__.minutes;

break;
case "hours":
return self__.hours;

break;
case "days":
return self__.days;

break;
case "weeks":
return self__.weeks;

break;
case "months":
return self__.months;

break;
case "years":
return self__.years;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15766,else__4931__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4942__auto__,writer__4943__auto__,opts__4944__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
var pr_pair__4945__auto__ = ((function (this__4942__auto____$1){
return (function (keyval__4946__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4943__auto__,cljs.core.pr_writer,""," ","",opts__4944__auto__,keyval__4946__auto__);
});})(this__4942__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4943__auto__,pr_pair__4945__auto__,"#cljs-time.core.Period{",", ","}",opts__4944__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4926__auto__){
var self__ = this;
var this__4926__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4922__auto__){
var self__ = this;
var this__4922__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4932__auto__){
var self__ = this;
var this__4932__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4923__auto__){
var self__ = this;
var this__4923__auto____$1 = this;
var h__4749__auto__ = self__.__hash;
if(!((h__4749__auto__ == null))){
return h__4749__auto__;
} else {
var h__4749__auto____$1 = cljs.core.hash_imap.call(null,this__4923__auto____$1);
self__.__hash = h__4749__auto____$1;

return h__4749__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4924__auto__,other__4925__auto__){
var self__ = this;
var this__4924__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4321__auto__ = other__4925__auto__;
if(cljs.core.truth_(and__4321__auto__)){
var and__4321__auto____$1 = (this__4924__auto____$1.constructor === other__4925__auto__.constructor);
if(and__4321__auto____$1){
return cljs.core.equiv_map.call(null,this__4924__auto____$1,other__4925__auto__);
} else {
return and__4321__auto____$1;
}
} else {
return and__4321__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4937__auto__,k__4938__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__4938__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4937__auto____$1),self__.__meta),k__4938__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4938__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4935__auto__,k__4936__auto__,G__15765){
var self__ = this;
var this__4935__auto____$1 = this;
var pred__15769 = cljs.core.keyword_identical_QMARK_;
var expr__15770 = k__4936__auto__;
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__15770))){
return (new cljs_time.core.Period(G__15765,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__15770))){
return (new cljs_time.core.Period(self__.years,G__15765,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__15770))){
return (new cljs_time.core.Period(self__.years,self__.months,G__15765,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__15770))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__15765,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__15770))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__15765,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__15770))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__15765,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__15770))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__15765,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15769.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__15770))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__15765,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4936__auto__,G__15765),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4940__auto__){
var self__ = this;
var this__4940__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4927__auto__,G__15765){
var self__ = this;
var this__4927__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__15765,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4933__auto__,entry__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4934__auto__)){
return cljs.core._assoc.call(null,this__4933__auto____$1,cljs.core._nth.call(null,entry__4934__auto__,(0)),cljs.core._nth.call(null,entry__4934__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4933__auto____$1,entry__4934__auto__);
}
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4962__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4962__auto__,writer__4963__auto__){
return cljs.core._write.call(null,writer__4963__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__15767){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__15767),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__15767),null,cljs.core.dissoc.call(null,G__15767,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(){
var G__15777 = arguments.length;
switch (G__15777) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,new cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq15773){
var G__15774 = cljs.core.first.call(null,seq15773);
var seq15773__$1 = cljs.core.next.call(null,seq15773);
var G__15775 = cljs.core.first.call(null,seq15773__$1);
var seq15773__$2 = cljs.core.next.call(null,seq15773__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__15774,G__15775,seq15773__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = 2;
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"millis","millis",-1338288387),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__15779_SHARP_,p2__15780_SHARP_){
return p1__15779_SHARP_.setMilliseconds(p2__15780_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__15781_SHARP_,p2__15782_SHARP_){
return p1__15781_SHARP_.setSeconds(p2__15782_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"minutes","minutes",1319166394),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__15783_SHARP_,p2__15784_SHARP_){
return p1__15783_SHARP_.setMinutes(p2__15784_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__15785_SHARP_,p2__15786_SHARP_){
return p1__15785_SHARP_.setHours(p2__15786_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__15787_SHARP_,p2__15788_SHARP_){
return p1__15787_SHARP_.setDate(p2__15788_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"weeks","weeks",1844596125),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),((7) * value)));
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"months","months",-45571637),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_15789 = op.call(null,cljs_time.core.month.call(null,date__$1),value);
var y_15790 = cljs_time.core.year.call(null,date__$1);
var y_15791__$1 = (((m_15789 > (12)))?(y_15790 + (1)):(((m_15789 < (1)))?(y_15790 - (1)):y_15790
));
var m_15792__$1 = (((m_15789 > (12)))?cljs.core.mod.call(null,m_15789,(12)):(((m_15789 < (1)))?(m_15789 + (12)):m_15789
));
var ldom_15793 = cljs_time.core.day.call(null,cljs_time.core.last_day_of_the_month_.call(null,(new goog.date.Date(y_15791__$1,(m_15792__$1 - (1)),(1)))));
if((ldom_15793 < cljs_time.core.day.call(null,date__$1))){
date__$1.setDate(ldom_15793);
} else {
}

date__$1.setMonth((m_15792__$1 - (1)));

date__$1.setYear(y_15791__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"years","years",-1298579689),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__4321__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));
if(cljs.core.truth_(and__4321__auto__)){
var and__4321__auto____$1 = cljs_time.core._EQ_.call(null,(2),cljs_time.core.month.call(null,date__$1));
if(cljs.core.truth_(and__4321__auto____$1)){
return cljs_time.core._EQ_.call(null,(29),cljs_time.core.day.call(null,date__$1));
} else {
return and__4321__auto____$1;
}
} else {
return and__4321__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.call(null,(function (p1__15795_SHARP_,p2__15794_SHARP_){
return cljs_time.core.periods.call(null,cljs.core.key.call(null,p2__15794_SHARP_)).call(null,operator,p1__15795_SHARP_,cljs.core.val.call(null,p2__15794_SHARP_));
}),date,p);
});
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
cljs_time.core.utc = goog.i18n.TimeZone.createTimeZone(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"UTC",new cljs.core.Keyword(null,"std_offset","std_offset",1663653877),(0),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),cljs.core.PersistentVector.EMPTY], null)));
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
return cljs_time.core._STAR_sys_time_STAR_;
} else {
return (new goog.date.UtcDateTime());
}
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 * in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__15797 = datetime__$1;
G__15797.setHours((0));

G__15797.setMinutes((0));

G__15797.setSeconds((0));

G__15797.setMilliseconds((0));

return G__15797;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__15799 = (new goog.date.UtcDateTime());
G__15799.setTime((0));

return G__15799;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 * Specify the year, month of year, day of month. Note that month and day are
 * 1-indexed. Any number of least-significant components can be ommited, in
 * which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(){
var G__15801 = arguments.length;
switch (G__15801) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;
/**
 * Constructs and returns a new DateTime in UTC.
 * 
 * Specify the year, month of year, day of month, hour of day, minute if hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(){
var G__15804 = arguments.length;
switch (G__15804) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(){
var G__15807 = arguments.length;
switch (G__15807) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 * local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
var d = cljs_time.core._STAR_sys_time_STAR_;
return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else {
return (new goog.date.Date());
}
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 * hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(){
var G__15810 = arguments.length;
switch (G__15810) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__4333__auto__ = minutes;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;
/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 * corresponding to the same absolute instant in time as the given
 * DateTime, but with calendar fields corresponding to in the default
 * (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 * corresponding to the same point in calendar time as the given
 * DateTime, but for a correspondingly different absolute instant in
 * time in the default (local) timezone.
 * 
 * Note: This implementation uses the ECMAScript 5.1 implementation which
 * trades some historical daylight savings transition accuracy for simplicity.
 * see http://es5.github.io/#x15.9.1.8
 * 
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 * Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(){
var G__15813 = arguments.length;
switch (G__15813) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many months.
 * Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(){
var G__15816 = arguments.length;
switch (G__15816) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many weeks.
 * Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(){
var G__15819 = arguments.length;
switch (G__15819) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many days.
 * Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(){
var G__15822 = arguments.length;
switch (G__15822) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many hours.
 * Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(){
var G__15825 = arguments.length;
switch (G__15825) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many minutes.
 * Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(){
var G__15828 = arguments.length;
switch (G__15828) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many seconds.
 * Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(){
var G__15831 = arguments.length;
switch (G__15831) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many milliseconds.
 * Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(){
var G__15834 = arguments.length;
switch (G__15834) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;
/**
 * Returns a new date/time corresponding to the given date/time moved
 * forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(){
var G__15840 = arguments.length;
switch (G__15840) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq15836){
var G__15837 = cljs.core.first.call(null,seq15836);
var seq15836__$1 = cljs.core.next.call(null,seq15836);
var G__15838 = cljs.core.first.call(null,seq15836__$1);
var seq15836__$2 = cljs.core.next.call(null,seq15836__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__15837,G__15838,seq15836__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = 2;
/**
 * Returns a new date/time object corresponding to the given date/time
 * moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(){
var G__15846 = arguments.length;
switch (G__15846) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5385__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5385__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq15842){
var G__15843 = cljs.core.first.call(null,seq15842);
var seq15842__$1 = cljs.core.next.call(null,seq15842);
var G__15844 = cljs.core.first.call(null,seq15842__$1);
var seq15842__$2 = cljs.core.next.call(null,seq15842__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__15843,G__15844,seq15842__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = 2;
/**
 * Returns a DateTime a supplied period before the present.
 * 
 * e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 * e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(){
var G__15849 = arguments.length;
switch (G__15849) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(){
var G__15852 = arguments.length;
switch (G__15852) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 * of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq15854){
var G__15855 = cljs.core.first.call(null,seq15854);
var seq15854__$1 = cljs.core.next.call(null,seq15854);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__15855,seq15854__$1);
});
cljs_time.core.month_range = (function cljs_time$core$month_range(p__15858){
var map__15860 = p__15858;
var map__15860__$1 = ((cljs.core.seq_QMARK_.call(null,map__15860))?cljs.core.apply.call(null,cljs.core.hash_map,map__15860):map__15860);
var end = cljs.core.get.call(null,map__15860__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__15860__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return cljs.core.take_while.call(null,((function (map__15860,map__15860__$1,end,start){
return (function (p1__15856_SHARP_){
return cljs_time.core.before_QMARK_.call(null,p1__15856_SHARP_,end);
});})(map__15860,map__15860__$1,end,start))
,cljs.core.map.call(null,((function (map__15860,map__15860__$1,end,start){
return (function (p1__15857_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__15857_SHARP_ + (1))));
});})(map__15860,map__15860__$1,end,start))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__15861_SHARP_){
return p1__15861_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 * For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 * returns 1 month.
 * 
 * Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 * But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 * And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__15862){
var map__15864 = p__15862;
var map__15864__$1 = ((cljs.core.seq_QMARK_.call(null,map__15864))?cljs.core.apply.call(null,cljs.core.hash_map,map__15864):map__15864);
var interval = map__15864__$1;
var end = cljs.core.get.call(null,map__15864__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__15864__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__15865){
var map__15867 = p__15865;
var map__15867__$1 = ((cljs.core.seq_QMARK_.call(null,map__15867))?cljs.core.apply.call(null,cljs.core.hash_map,map__15867):map__15867);
var end = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__4321__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__4321__auto__)){
var and__4321__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__4321__auto____$1)){
var and__4321__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__4321__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__4321__auto____$2;
}
} else {
return and__4321__auto____$1;
}
} else {
return and__4321__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__15868){
var map__15869 = p__15868;
var map__15869__$1 = ((cljs.core.seq_QMARK_.call(null,map__15869))?cljs.core.apply.call(null,cljs.core.hash_map,map__15869):map__15869);
var end = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var map__15870 = this;
var map__15870__$1 = ((cljs.core.seq_QMARK_.call(null,map__15870))?cljs.core.apply.call(null,cljs.core.hash_map,map__15870):map__15870);
var end__$1 = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start__$1 = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__15871){
var map__15872 = p__15871;
var map__15872__$1 = ((cljs.core.seq_QMARK_.call(null,map__15872))?cljs.core.apply.call(null,cljs.core.hash_map,map__15872):map__15872);
var years = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.call(null,map__15872__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var map__15873 = this;
var map__15873__$1 = ((cljs.core.seq_QMARK_.call(null,map__15873))?cljs.core.apply.call(null,cljs.core.hash_map,map__15873):map__15873);
var years__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis__$1 = cljs.core.get.call(null,map__15873__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__15874){
var map__15875 = p__15874;
var map__15875__$1 = ((cljs.core.seq_QMARK_.call(null,map__15875))?cljs.core.apply.call(null,cljs.core.hash_map,map__15875):map__15875);
var years = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var map__15876 = this;
var map__15876__$1 = ((cljs.core.seq_QMARK_.call(null,map__15876))?cljs.core.apply.call(null,cljs.core.hash_map,map__15876):map__15876);
var years__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis__$1 = cljs.core.get.call(null,map__15876__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__4333__auto__ = years__$1;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__15877){
var map__15878 = p__15877;
var map__15878__$1 = ((cljs.core.seq_QMARK_.call(null,map__15878))?cljs.core.apply.call(null,cljs.core.hash_map,map__15878):map__15878);
var years = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var map__15879 = this;
var map__15879__$1 = ((cljs.core.seq_QMARK_.call(null,map__15879))?cljs.core.apply.call(null,cljs.core.hash_map,map__15879):map__15879);
var years__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis__$1 = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 * DateTime. Note that if the DateTime is exactly equal to the
 * end of the interval, this function returns false.
 * 
 * With 3 arguments: Returns true if the start DateTime is
 * equal to or before and the end DateTime is equal to or after the test
 * DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(){
var G__15881 = arguments.length;
switch (G__15881) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__15882,date){
var map__15883 = p__15882;
var map__15883__$1 = ((cljs.core.seq_QMARK_.call(null,map__15883))?cljs.core.apply.call(null,cljs.core.hash_map,map__15883):map__15883);
var end = cljs.core.get.call(null,map__15883__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__15883__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__4333__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
var and__4321__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__4321__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__4321__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 * Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 * With 4 arguments: Returns true if the range specified by start-a and end-a
 * overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(){
var G__15886 = arguments.length;
switch (G__15886) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__15887,p__15888){
var map__15889 = p__15887;
var map__15889__$1 = ((cljs.core.seq_QMARK_.call(null,map__15889))?cljs.core.apply.call(null,cljs.core.hash_map,map__15889):map__15889);
var start_a = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__15890 = p__15888;
var map__15890__$1 = ((cljs.core.seq_QMARK_.call(null,map__15890))?cljs.core.apply.call(null,cljs.core.hash_map,map__15890):map__15890);
var start_b = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__4321__auto__ = cljs.core.not.call(null,(function (){var or__4333__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__4321__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__4321__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__4333__auto__ = (function (){var and__4321__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__4321__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__4321__auto__;
}
})();
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (function (){var and__4321__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__4321__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__4321__auto__;
}
})();
if(cljs.core.truth_(or__4333__auto____$1)){
return or__4333__auto____$1;
} else {
var or__4333__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__4333__auto____$2)){
return or__4333__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 * beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__15892,p__15893){
var map__15896 = p__15892;
var map__15896__$1 = ((cljs.core.seq_QMARK_.call(null,map__15896))?cljs.core.apply.call(null,cljs.core.hash_map,map__15896):map__15896);
var start_a = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__15896__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__15897 = p__15893;
var map__15897__$1 = ((cljs.core.seq_QMARK_.call(null,map__15897))?cljs.core.apply.call(null,cljs.core.hash_map,map__15897):map__15897);
var start_b = cljs.core.get.call(null,map__15897__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__15897__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__4333__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
var G__15899 = x;
if(G__15899){
var bit__5007__auto__ = null;
if(cljs.core.truth_((function (){var or__4333__auto__ = bit__5007__auto__;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return G__15899.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__15899.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,G__15899);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,G__15899);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__4321__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__4321__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(){
var G__15901 = arguments.length;
switch (G__15901) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(){
var G__15904 = arguments.length;
switch (G__15904) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(){
var G__15907 = arguments.length;
switch (G__15907) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;
if(typeof cljs_time.core.__GT_period !== 'undefined'){
} else {
cljs_time.core.__GT_period = (function (){var method_table__5228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5232__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-time.core","->period"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5232__auto__,method_table__5228__auto__,prefer_table__5229__auto__,method_cache__5230__auto__,cached_hierarchy__5231__auto__));
})();
}
cljs.core._add_method.call(null,cljs_time.core.__GT_period,cljs_time.core.Interval,(function (p__15909){
var map__15910 = p__15909;
var map__15910__$1 = ((cljs.core.seq_QMARK_.call(null,map__15910))?cljs.core.apply.call(null,cljs.core.hash_map,map__15910):map__15910);
var interval = map__15910__$1;
var end = cljs.core.get.call(null,map__15910__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__15910__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var years = cljs_time.core.in_years.call(null,interval);
var start_year = cljs_time.core.year.call(null,start);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval);
var months = cljs.core.count.call(null,days_in_months);
var days_to_remove = ((((365) * years) + leap_years) + cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months));
var days = (cljs_time.core.in_days.call(null,interval) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval) - ((1000) * (seconds + seconds_to_remove))));
}));
cljs.core._add_method.call(null,cljs_time.core.__GT_period,cljs_time.core.Period,(function (period){
return period;
}));
cljs_time.core.today_at = (function cljs_time$core$today_at(){
var G__15912 = arguments.length;
switch (G__15912) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (new goog.date.Date());
var G__15913 = (new goog.date.UtcDateTime((0)));
G__15913.setYear(midnight.getYear());

G__15913.setMonth(midnight.getMonth());

G__15913.setDate(midnight.getDate());

G__15913.setHours(hours);

G__15913.setMinutes(minutes);

G__15913.setSeconds(seconds);

G__15913.setMilliseconds(millis);

return G__15913;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_sys_time_STAR_15916 = cljs_time.core._STAR_sys_time_STAR_;
cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_15916;
}});

//# sourceMappingURL=core.js.map?rel=1440296862331