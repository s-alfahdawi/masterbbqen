import {general_photos} from "@/app/_api/photos.json";
import Gallery from "/app/_components/gallery/Gallery"

export default function Gallerypage() {
    return <Gallery photos={general_photos}/>
}
