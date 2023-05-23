import { getBookFromId } from "@/api-helpers/frontend/utils";
import { Padding } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BookDetail = function () {
    // getting book details
    const router = useRouter();
    const id = router.query.id;
    const [details, setDetails] = useState(
        getBookFromId(id).then(() => console.log("loaded book"))
    );

    useEffect(() => {
        getBookFromId(id)
            .then((data) => setDetails(data))
            .catch((err) => console.log(err));
        console.log(details);
        // setDetails(details);
    }, [router.query.id]);
    return (
        <div>
            <main className="book-container">
                <div className="book">
                    <div className="book-cover">
                        <div>
                            <img
                                src={details.imageURL}
                                width={"100%"}
                                heigth={"100%"}
                            ></img>
                        </div>
                    </div>
                    <div className="book-content">
                        <h3 className="sample-excerpt">
                            An Excerpt from Chapter One
                        </h3>

                        <p className="paragraph">Sample paragraph 1.</p>
                        <p className="paragraph">Sample paragraph 2.</p>
                        <p className="paragraph">Sample paragraph 3.</p>
                        <p className="paragraph">Sample paragraph 4.</p>
                        <p className="paragraph">Sample paragraph 5.</p>
                    </div>
                </div>
            </main>
            <div className="details-container">
                <div className="book-details-container">
                    <h1
                        style={{
                            fontSize: "40px",
                        }}
                    >
                        {details.title}
                    </h1>
                    <h2
                        style={{
                            fontSize: "20px",
                            fontStyle: "italic",
                        }}
                    >
                        {details.author}
                    </h2>
                    <p className="book-details-textcontent">
                        {details.details}
                    </p>
                </div>
                <div className="buy-book-container">
                    <p
                        style={{
                            color: "black",
                            display: "flex",
                            justifyContent: "center",
                            margin: "auto",
                        }}
                    >
                        Purchase info here, will be added later
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
