import { modelName } from '@/constants';
import { ImageResponse } from 'next/og';

export async function GET() {
    const firstName = modelName.split(' ')[0];
    const lastName = modelName.split(' ')[1] + ' ' + modelName.split(' ')[2];
    const title = 'Model and Software Engineer';

    return new ImageResponse(
        (
            <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                fontWeight : 'bold',
                alignItems: 'center',
                width: '100%', // Set width to match your needs or keep it responsive
                height: '100%', // Set height based on the image height
                backgroundImage: `url(${'https://res.cloudinary.com/dtgpkhylr/image/upload/v1714748348/personal/thw1ejqv95h4bbqokout.jpg'})`,
                
            }}>
                <h1 style={{
                    color: 'white', // Ensure text is visible on image                    
                    textShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)', // Text shadow for better visibility
                    fontSize: '70px', // Adjust size as needed
                    textAlign: 'center',
                    position: 'absolute', // Positioning the text over the image
                    top: '50%', // Center vertically
                    left: '50%', // Center horizontally
                    transform: 'translate(-50%, -50%)' // Adjust the exact center position
                }}>
                   {firstName} {lastName} Adiputra
                </h1>
                <h2 style={{
                    color: 'white', // Ensure text is visible on image
                    textShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)', // Text shadow for better visibility
                    fontSize: '35px', // Adjust size as needed
                    textAlign: 'center',
                    fontFamily: 'revert-layer',
                    position: 'absolute', // Positioning the text over the image
                    top: '60%', // Center vertically
                    left: '50%', // Center horizontally
                    transform: 'translate(-50%, -50%)' // Adjust the exact center position
                }}>
                   {title}                   
                </h2>
            </div>
        ),
        { width: 1200, height: 630 } // Adjust the size of the image response
    );
}
