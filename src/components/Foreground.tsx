import { useRef } from 'react';
import Card from './Card'

const Foreground = () => {
  const datas = [ 
    {
      id: '45001',
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        title: "Download Now",
        bgColor: "green"
      }
    },
    {
      id: '45002',
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.2mb",
      close: true,
      tag: {
        isOpen: false,
        title: "Download Now",
        bgColor: "green"
      }
    },
    {
      id: '45003',
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "1.2kb",
      close: true,
      tag: {
        isOpen: true,
        title: "Uploaded",
        bgColor: "blue"
      }
    }
  ];
  const ref = useRef(null);
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
      { datas?.map((data, index) => (
        <Card {...data} reference={ref} key={`${data?.id}-${index}`} />
      )) }
    </div>
  )
}

export default Foreground