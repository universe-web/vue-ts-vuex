import moment from 'moment';

export function formatTimestamp (timestamp: number | undefined, type?: string): string {
  let timeText = '--'

  if (!timestamp) return timeText

  if (timestamp.toString().length === 10) timestamp = timestamp * 1000

  if (!type) {
    timeText = moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
  } else if (type === 'date') {
    timeText = moment(timestamp).format('YYYY-MM-DD')
  } else if (type === 'time') {
    timeText = moment(timestamp).format('HH:mm:ss')
  }

  return timeText
}

// timeType: start（00:00:00），end（23:59:59）
// type: now（实时时间），add（往后移dates天），subtract（往前移dates天）
export function stringifyTimeToDate(timestamp: number | undefined, timeType?: string, type?: string, dates?: number): number {
  if (!timestamp) timestamp = moment().unix()
  if (timestamp.toString().length === 10) timestamp = timestamp * 1000;

  if (timeType) {
    if (timeType === 'start') {
      timestamp = moment(timestamp).hour(0).minute(0).second(0).unix() * 1000
    } else {
      timestamp = moment(timestamp).hour(23).minute(59).second(59).unix() * 1000
    }
  }

  if (type === 'now' || !dates) return timestamp

  if (type === 'add') {
    timestamp = moment(timestamp).add(dates, 'd').unix() * 1000;
  } else if (type === 'subtract') {
    timestamp = moment(timestamp).subtract(dates, 'd').unix() * 1000;
  }

  return timestamp
}

// scopeType: 年/月/周...
// type: startOf（开始），endOf（结束）
// scopeTypes = ['year', 'month', 'quarter', 'week', 'isoWeek', 'day', 'date', 'hour', 'minute', 'second']
export function stringifyTimeOfScope(timestamp: number | undefined, scopeType: any, type: string): number {
  if (!timestamp) timestamp = moment().unix()
  if (timestamp.toString().length === 10) timestamp = timestamp * 1000;

  if (type === 'startOf') {
    timestamp = moment(timestamp).startOf(scopeType).unix() * 1000
  } else {
    timestamp = moment(timestamp).endOf(scopeType).unix() * 1000
  }

  return timestamp
}