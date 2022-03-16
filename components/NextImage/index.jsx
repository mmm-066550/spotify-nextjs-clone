import Image from "next/image";

export default function NextImage(props) {
  return <Image src={`/api/imageProxy?imageUrl=${props.path}`} {...props} />;
}
