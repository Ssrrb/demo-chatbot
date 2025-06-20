export default function VideoDemo() {
    return (
        <section className="p-4">
            <div
                className="relative flex items-center justify-center bg-white bg-cover bg-center aspect-video rounded-xl p-4"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCczl-drnUN9fLqUHw-EgfqXjtJI1xXMjN_J9hlrOIn0NKT84EEjXWxdPyiqAM37cWsdZrHk-GfZz9R_SKUlpxmIn_GIgol_SYgSRIL12wLLxoQCianABVOq-F7UEP5Y51gw4MVTBruO9xyJfxL33Pa0kS_2vuto5q7bPBrEZXjhygGsALggJ5u8a55OIRT002-30uJjLRTU77o9bWj-I-YCdc8FCLer3pE0JltQSXU9JpZrbgdBwplR_6NMWdv0ohTQ8GlSB8qsB8')",
                }}
            >
                <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white">
                    <span className="sr-only">Play Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
