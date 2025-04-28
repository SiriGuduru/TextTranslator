import { useState } from "react"
import axios from "axios"
import { LoaderCircle } from "lucide-react"

function App() {
  const [textInput, setTextInput] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleTextTranslation = async () => {
    setLoading(true)
    try {
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': 'ea5a4a440cmshcb25f8ee118ca9ep146efdjsne4e5a94362b6',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: `${textInput}`,
          source: 'en',
          target: `${selectValue}`,
          format: 'text'
        }
      };
      const response = await axios.request(options)
      setLoading(false)
      console.log(response?.data?.data?.translations?.[Number(0)]?.translatedText)
      setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText)
    } catch (error) {
      setLoading(false)
      console.log(error?.data)
    }

  }

  console.log(textInput)
  console.log(selectValue)
  return (


    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center ">
      <div>
        <h1 className="text-3xl  font-bold pt-8 flex items-center justify-center mb-3">
          Text Translator
        </h1>

        <div className="flex items-center justify-center flex-col gap-y-5 ">
          <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2" onChange={(e) => setTextInput(e.target.value)} />
          <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2" value={result} readOnly />

          <div className="font-bold">
            <label htmlFor="options" className="py-2 px-3">Converted Into :  </label>
            <select name="value" className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline-none cursor-pointer" onChange={(e) => setSelectValue(e.target.value)}>
              <option value=" ">Select</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="gu">Gujarati</option>
              <option value="bn">Bengali</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ru">Russian</option>
              <option value="ar">Arabic</option>
              <option value="bi">Bislama</option>
              <option value="da">Danish</option>
              <option value="la">Latin</option>
              <option value="nl">Dutch</option>
              <option value="ne">Nepali</option>
              <option value="pt">Portuguese</option>
              <option value="sa">Sanskrit</option>
              <option value="te">Telugu</option>
              <option value="sd">Sindhi</option>
              <option value="uk">Ukrainian</option>
              <option value="tr">Turkish</option>
              <option value="ur">Urdu</option>


            </select>
          </div>

        </div>
        <button className="bg-slate-700 hover:bg-slate-900 text-slate-100 mx-auto w-[500px] py-2 rounded-lg cursor-pointer flex items-center justify-center font-bold mt-4" onClick={handleTextTranslation}>
          {
            loading ? (<LoaderCircle className="animate-spin" />) : "Translate"
          }
        </button>

      </div>

    </div>

  )

}

export default App