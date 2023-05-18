import BookDetail from "@/components/BookDetail";

export default function detailsPage() {
    return (
        <div
            style={{
                backgroundColor: "white",
                position: "absolute",
                top: "63px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            }}
        >
            <BookDetail />
        </div>
    );
}
