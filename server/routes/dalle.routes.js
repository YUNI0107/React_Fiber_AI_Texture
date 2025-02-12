import express from 'express'
import * as dotenv from 'dotenv'
import OpenAI from 'openai';
import fs from 'fs'
import path from 'path'

const router = express.Router()
dotenv.config()

// openAI: Image Generation
// https://openai.com/research/dall-e
// Document: https://platform.openai.com/docs/guides/images/image-generation-beta
const config = {
  apiKey: process.env.OPENAI_API_KEY,
}
const openai = new OpenAI(config)

// routes
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello Dalle' })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
      quality: 'standard',
      model: 'dall-e-2',
    })

    const image = response.data[0].b64_json
    const imagePath = `${Date.now()}.png`

    fs.writeFile(`static/${imagePath}`, image, 'base64', (err) => {
      if (err) throw err
      console.log('The image has been saved!')

      const __dirname = path.resolve()
      const filePath = `${__dirname}/static/${imagePath}`


      /**
       * Methods A: Send the image as a URL
       */
      // res.status(200).json({ photo: `http://localhost:3000/${imagePath}` })

      /**
      * Methods B: Send the image as a file
      */
      res.type('image/png')
      res.sendFile(filePath)
    })

    // Directly send base64 to frond-end
    // res.status(200).json({ photo: image })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: ' Something went wrong' })
  }
})

export default router
