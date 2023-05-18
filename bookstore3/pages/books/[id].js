import BookDetail from "@/components/BookDetail";

export default function detailsPage() {
    return (
        <div
            style={{
                backgroundColor: "white",
                minHeight: "100vh",
                position: "absolute",
                top: "63px",
                right: "0px",
                left: "0px",
            }}
        >
            <BookDetail />
        </div>
    );
}
