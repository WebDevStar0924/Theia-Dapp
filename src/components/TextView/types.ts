export interface textViewProps {
  label?: string
  value: string
  rows: number
  placeholder?: string
  onUserInput?: (val: string) => void
}
