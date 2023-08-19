
import './App.css'
import { BaseButton } from './components/Base/BaseButton'

function App() {


  return (
    <>
      <h1 className='text-3xl text-black'>
        Buttons
      </h1>
      <div className='flex mt-5 flex-col gap-y-8'>
        <div className='flex flex-col gap-y-2'>
          {'<Button/>'}
          <BaseButton color='default' size='lg'>
            Default
          </BaseButton>
        </div>
        <div className='flex flex-col gap-y-2'>
          {'<Button variant=`outline`/>'}
          <BaseButton variant='outline' >
            Default
          </BaseButton>
        </div>
        <div className='flex flex-col gap-y-2'>
          {'<Button variant=`text`/>'}
          <BaseButton variant='text' >
            Default
          </BaseButton>
        </div>
        <div className='flex flex-col gap-y-2'>
          {'<Button disableShadow/>'}
          <BaseButton disableShadow>
            Default
          </BaseButton>
        </div>

        <div className='flex gap-x-16'>
          <div className='flex flex-col gap-y-2'>
            {'<Button disabled/>'}
            <BaseButton disabled>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button disableShadow/>'}
            <BaseButton disabled variant='text'>
              Default
            </BaseButton>
          </div>
        </div>
        <div className='flex gap-x-16'>
          <div className='flex flex-col gap-y-2'>
            {'<Button startIcon=”local_grocery_store” />'}
            <BaseButton startIcon='local_grocery_store'>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button endIcon=”local_grocery_store” />'}
            <BaseButton endIcon='local_grocery_store'>
              Default
            </BaseButton>
          </div>
        </div>
        <div className='flex gap-x-16'>
          <div className='flex flex-col gap-y-2'>
            {'<Button size=”sm” />'}
            <BaseButton size='lg'>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button size=md />'}
            <BaseButton size='lg'>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button size="lg" />'}
            <BaseButton size='lg'>
              Default
            </BaseButton>
          </div>
        </div>
        <div className='flex gap-x-16'>
          <div className='flex flex-col gap-y-2'>
            {'<Button color="default" />'}
            <BaseButton color='default'>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button color=primary />'}
            <BaseButton color='primary'>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button color="secondary" />'}
            <BaseButton color='secondary'>
              Default
            </BaseButton>
          </div>
          <div className='flex flex-col gap-y-2'>
            {'<Button color="danger" />'}
            <BaseButton color='danger'>
              Default
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
