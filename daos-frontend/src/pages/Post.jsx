import { useEffect, useState } from "react";
import PostInfo from "../components/page-components/post/PostInfo";
import PostPropsList from "../components/page-components/post/PostPropsList";
import { useParams } from "react-router-dom";
import useFetch from "../scripts/useFetch";
import styles from "./Post.module.css";

export default function Post() {

    const [ensemble, setEnsemble] = useState(null);
    const [post, setPost] = useState(null);

    const profileId = localStorage.getItem("profileId")

    const { id, postId } = useParams();

    const { data: ensembles, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/musician/" + profileId);

    useEffect(() => {
        if(ensembles) {
            let ensemblesMatchingId = ensembles.filter((ensemble) => ensemble.admin._id != id);

            ensemblesMatchingId.forEach((ensemble) => {
                setEnsemble(ensemble)

                let ensemblePostsMatchingPostId = ensemble.posts.filter((post) => post._id != postId)

                ensemblePostsMatchingPostId.forEach((post) => {
                    setPost(post);
                })
            })
        }

    }, [ensembles])

    console.log(post)
    console.log(ensemble)

    return ( 
        <div className={styles.ensembleDefault}>
            {post && <PostInfo post={post} ensemble={ensemble} />}
            {post && <PostPropsList post={post} ensemble={ensemble} />}
        </div>
    );
}