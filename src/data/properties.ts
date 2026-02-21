const STORAGE_BASE = "https://zasqarwxwplrbotbjnkc.supabase.co/storage/v1/object/public";

function img(bucket: string, path: string) {
  return `${STORAGE_BASE}/${bucket}/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
}

export interface Property {
  id: string;
  title: string;
  status: "Concluído" | "Em andamento";
  cover: string;
  images: string[];
}

export const properties: Property[] = [
  {
    id: "casa-01",
    title: "Casa 01",
    status: "Concluído",
    cover: img("img3", "Casa 01/@filipemaker-1031.jpg"),
    images: [
      img("img3", "Casa 01/@filipemaker-1010.jpg"),
      img("img3", "Casa 01/@filipemaker-1011.jpg"),
      img("img3", "Casa 01/@filipemaker-1012.jpg"),
      img("img3", "Casa 01/@filipemaker-1014.jpg"),
      img("img3", "Casa 01/@filipemaker-1018.jpg"),
      img("img3", "Casa 01/@filipemaker-1020.jpg"),
      img("img3", "Casa 01/@filipemaker-1025.jpg"),
      img("img3", "Casa 01/@filipemaker-1031.jpg"),
      img("img3", "Casa 01/@filipemaker-1035.jpg"),
      img("img3", "Casa 01/@filipemaker-1040.jpg"),
      img("img3", "Casa 01/@filipemaker-1045.jpg"),
      img("img3", "Casa 01/@filipemaker-1048.jpg"),
    ],
  },
  {
    id: "casa-02",
    title: "Casa 02",
    status: "Concluído",
    cover: img("img3", "Casa 02/DSC04096.jpg"),
    images: [
      img("img3", "Casa 02/DSC04096.jpg"),
      img("img3", "Casa 02/DSC04099.jpg"),
      img("img3", "Casa 02/DSC04101.jpg"),
      img("img3", "Casa 02/DSC04107.jpg"),
      img("img3", "Casa 02/DSC04113.jpg"),
      img("img3", "Casa 02/DSC04121.jpg"),
      img("img3", "Casa 02/DSC04130.jpg"),
      img("img3", "Casa 02/DSC04140.jpg"),
      img("img3", "Casa 02/DSC04150.jpg"),
      img("img3", "Casa 02/DSC04160.jpg"),
      img("img3", "Casa 02/DSC04170.jpg"),
    ],
  },
  {
    id: "casa-02b",
    title: "Casa 02 – Interiores",
    status: "Concluído",
    cover: img("img2", "Casa 2/@filipemaker-001.jpg"),
    images: [
      img("img2", "Casa 2/@filipemaker-001.jpg"),
      img("img2", "Casa 2/@filipemaker-003.jpg"),
      img("img2", "Casa 2/@filipemaker-005.jpg"),
      img("img2", "Casa 2/@filipemaker-008.jpg"),
      img("img2", "Casa 2/@filipemaker-010.jpg"),
      img("img2", "Casa 2/@filipemaker-013.jpg"),
      img("img2", "Casa 2/@filipemaker-016.jpg"),
      img("img2", "Casa 2/@filipemaker-019.jpg"),
    ],
  },
  {
    id: "casa-03",
    title: "Casa 03",
    status: "Concluído",
    cover: img("img2", "Casa 03/@filipemaker-1.jpg"),
    images: [
      img("img2", "Casa 03/@filipemaker-1.jpg"),
      img("img2", "Casa 03/@filipemaker-5.jpg"),
      img("img2", "Casa 03/@filipemaker-10.jpg"),
      img("img2", "Casa 03/@filipemaker-15.jpg"),
      img("img2", "Casa 03/@filipemaker-20.jpg"),
      img("img2", "Casa 03/@filipemaker-23.jpg"),
      img("img2", "Casa 03/@filipemaker-25.jpg"),
      img("img2", "Casa 03/@filipemaker-92.jpg"),
      img("img2", "Casa 03/@filipemaker-96.jpg"),
      img("img2", "Casa 03/@filipemaker-100.jpg"),
    ],
  },
  {
    id: "casa-04",
    title: "Casa 04",
    status: "Concluído",
    cover: img("img2", "Casa 04/@filipemaker-105.jpg"),
    images: [
      img("img2", "Casa 04/@filipemaker-105.jpg"),
      img("img2", "Casa 04/@filipemaker-108.jpg"),
      img("img2", "Casa 04/@filipemaker-110.jpg"),
      img("img2", "Casa 04/@filipemaker-135.jpg"),
      img("img2", "Casa 04/@filipemaker-140.jpg"),
      img("img2", "Casa 04/@filipemaker-145.jpg"),
      img("img2", "Casa 04/@filipemaker-150.jpg"),
      img("img2", "Casa 04/@filipemaker-155.jpg"),
      img("img2", "Casa 04/@filipemaker-158.jpg"),
    ],
  },
  {
    id: "casa-05",
    title: "Casa 05",
    status: "Concluído",
    cover: img("img2", "Casa 05/@filipemaker-28.jpg"),
    images: [
      img("img2", "Casa 05/@filipemaker-28.jpg"),
      img("img2", "Casa 05/@filipemaker-30.jpg"),
      img("img2", "Casa 05/@filipemaker-35.jpg"),
      img("img2", "Casa 05/@filipemaker-40.jpg"),
      img("img2", "Casa 05/@filipemaker-45.jpg"),
      img("img2", "Casa 05/@filipemaker-50.jpg"),
      img("img2", "Casa 05/@filipemaker-55.jpg"),
      img("img2", "Casa 05/@filipemaker-60.jpg"),
      img("img2", "Casa 05/@filipemaker-65.jpg"),
      img("img2", "Casa 05/@filipemaker-70.jpg"),
    ],
  },
];

// Hero images for the Index carousel (Casa 01 best shots)
export const heroImages = [
  img("img3", "Casa 01/@filipemaker-1031.jpg"),
  img("img3", "Casa 01/@filipemaker-1020.jpg"),
  img("img3", "Casa 01/@filipemaker-1040.jpg"),
  img("img3", "Casa 01/@filipemaker-1048.jpg"),
  img("img3", "Casa 01/@filipemaker-1014.jpg"),
];
