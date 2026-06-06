import { useBucket } from "../context/BucketContext";
import MovieGrid from "./Moviegrid";

const BucketList = ()=> {

    const {bucket, addToBucket} = useBucket();

    if (bucket.length === 0) return <p>Bucket is EMpTY!!!</p>

    return (
        <div className="bg-bg h-[100vh]">

            <MovieGrid movies={bucket} title="YOUR FILM BUCKET" layout="grid" variant="grid"/>
        </div>
    )
}

export default BucketList
