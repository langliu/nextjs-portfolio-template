export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN').format(date)
}
