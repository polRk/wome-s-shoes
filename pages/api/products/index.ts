import { NextApiHandler } from 'next'
import { FirestoreDB } from '../../../data/firebase/firestoreDB'
import { IProduct } from '../../../domain/entities/product.entity'

const DEFAULT_LIMIT = 20
const DEFAULT_OFFSET = 0

interface ResponseBody {
  products: IProduct[]
  limit: number
  offset: number
}

interface ErroredResponseBody {
  error: string
}

const handler: NextApiHandler<ResponseBody | ErroredResponseBody> = async (
  req,
  res
) => {
  const db = new FirestoreDB()

  try {
    let limit: number = DEFAULT_LIMIT
    let offset: number = DEFAULT_OFFSET

    if (typeof req.query.limit === 'string') {
      limit = parseInt(req.query.limit, 10)
    }

    if (typeof req.query.offset === 'string') {
      offset = parseInt(req.query.offset, 10)
    }

    if (limit > 100) {
      res.status(400).json({ error: 'limit mast be less then 100' })
      return
    }

    const products = await db.getActiveProducts(limit, offset)
    res.status(200).json({ products, limit, offset })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export default handler
