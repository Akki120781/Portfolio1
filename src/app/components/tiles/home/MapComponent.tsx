export default function MapComponent() {
    const keralaEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118990.39801861723!2d75.78144833070579!3d22.723951637371997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1775833053186!5m2!1sen!2sin";

    return (
        <div className="w-full h-full relative">
            <iframe
                title="Google Map"
                src={keralaEmbedUrl}
                className="w-full h-full border-0 filter transition duration-500 dark:[filter:grayscale(100%)_invert(92%)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    );
}