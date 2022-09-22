export interface CollectiveContextProps {
  forums: any;
  galleries: any;
  mixedData: any[];
  setForums: (data: any[]) => void;
  setGalleries: (data: any[]) => void;
  setMixedData: (data: any[]) => void;
  collectiveInfo: any;
  sort: string;
  updateSort: (data: string) => void;
  filter: any;
  updateFilter: (data: any) => void;
}
