import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const locale = {
  name: 'en-short',
  relativeTime: {
    d: '1d',
    dd: '%dd',
    future: '%s',
    h: '1h',
    hh: '%dh',
    m: '1m',
    M: '1M',
    mm: '%dm',
    MM: '%dM',
    past: '%s',
    s: 'now',
    y: '1y',
    yy: '%dy'
  }
}

dayjs.extend(relativeTime)
dayjs.locale(locale, null, true)

export default (_, inject) => {
  inject('dayjs', dayjs)
}
