import { NextApiHandler } from 'next'
import { FirestoreDB } from '../../../data/firebase/firestoreDB'
import { IProduct } from '../../../domain/entities/product.entity'

interface ResponseBody {
  product: IProduct | null
}

const handler: NextApiHandler<ResponseBody> = async (req, res) => {
  const db = new FirestoreDB()

  try {
    const product = await db.getProductBySlug(req.query.slug as string)

    res.status(product === null ? 404 : 200).json({ product })
  } catch (e) {
    res.status(500).send(e)
  }
}

export default handler
