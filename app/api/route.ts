
import { NextResponse, type NextRequest } from 'next/server'
import axios from 'axios';
export async function POST(req: Request, res: Response) {
//   const { videoId } = req.query;
//demo videoId
const videoId = "UxxajLWwzqY";
const options = {
    method: 'GET',
    url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
    params: { id: videoId },
    headers: {
      'X-RapidAPI-Key': '1cf22ce375msh575ba2175ae2d13p1e662ejsnb36fde3a19d4',
      'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
    }
  };

  try {
    // if (typeof videoId !== 'string') {
    //     console.log("Invalid video ID.");
        
    //   throw new Error('Invalid video ID.');
    // }

    const response = await axios.request(options);
    console.log("response",response);
    
    
    return NextResponse.json({
        data: response.data,
        status: 200

      })
  } catch (error:any) {
    console.log(error.message);
    
    return NextResponse.json({
        Error: error.message,
        status: 400
      })
  }
}

export async function GET(req: Request, res: Response) {
    //   const { videoId } = req.query;
    //demo videoId
    const videoId = "UxxajLWwzqY";
    const options = {
        method: 'GET',
        url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
        params: { id: videoId },
        headers: {
          'X-RapidAPI-Key': '1cf22ce375msh575ba2175ae2d13p1e662ejsnb36fde3a19d4',
          'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
        }
      };
    
      try {
        // if (typeof videoId !== 'string') {
        //     console.log("Invalid video ID.");
            
        //   throw new Error('Invalid video ID.');
        // }
    
        const response = await axios.request(options);
        console.log("response",response);
        
        
        return NextResponse.json({
            data: response.data,
            status: 200
    
          })
      } catch (error:any) {
        console.log(error.message);
        
        return NextResponse.json({
            Error: error.message,
            status: 400
          })
      }
    }