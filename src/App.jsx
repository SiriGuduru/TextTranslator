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
      setResult(response?.data?.data?.translations?.[0]?.translatedText)
    } catch (error) {
      setLoading(false)
      console.log(error?.data)
    }
  }

  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-pink-800">
          Text Translator
        </h1>

        <div className="flex flex-col items-center gap-5">
          {/* Input Textarea */}
          <textarea
            name="input-text"
            className="bg-white h-32 w-full border border-slate-700 outline-none rounded-lg text-base md:text-lg px-5 py-3 resize-none"
            placeholder="Enter text to translate..."
            onChange={(e) => setTextInput(e.target.value)}
          />

          {/* Result Textarea */}
          <textarea
            name="output-text"
            className="bg-white h-32 w-full border border-slate-700 outline-none rounded-lg text-base md:text-lg px-5 py-3 resize-none"
            value={result}
            readOnly
          />

          {/* Language Select */}
          <div className="font-bold w-full">
            <label htmlFor="options" className="block mb-2">
              Converted Into:
            </label>
            <select
              name="value"
              className="bg-white w-full px-4 py-2 rounded-lg border border-zinc-700 outline-none cursor-pointer"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="">Select</option>
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

          {/* Translate Button */}
          <button
            className="bg-blue-900 hover:bg-green-900 text-slate-100 w-full py-3 rounded-lg font-bold flex items-center justify-center mt-4"
            onClick={handleTextTranslation}
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Translate"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
