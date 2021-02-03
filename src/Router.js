import { Router } from 'express';

const router = Router(); 


// Some simple 'hello world' level routes to play around with
router.route('/dali')
    .get((req, res) => {
        res.json({ result: 'hello world' });
    })
    .put((req, res) => {
        res.json({ result: req.body.key1 });
    });
    
router.route('/sample-route/:param1/:param2')
    .get((req, res) => {
        res.json(req.params);
    });
    
router.route('/error-route')
    .get((req, res) => {
        res.status(500).send('An unknown error occurred');
    });
    
export default router;