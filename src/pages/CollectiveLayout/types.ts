export interface CollectiveContextProps {
  forums: any
  galleries: any
  events: any[]
  mixedData: any[]
  setEvents: (data: any[]) => void
  setForums: (data: any[]) => void
  setGalleries: (data: any[]) => void
  setMixedData: (data: any[]) => void
  collectiveInfo: any
  sort: string
  updateSort: (data: string) => void
  filter: any
  updateFilter: (data: any) => void
  members: any[]
  topics: any[]
  updateTopics: (data: any) => void
}
