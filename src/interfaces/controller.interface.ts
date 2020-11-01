import { Router } from 'express'
interface Controller {
  readonly router: Router
   init(): void
}

export default Controller