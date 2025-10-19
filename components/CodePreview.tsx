
import React from 'react';

const CodePreview: React.FC = () => {
  return (
    <div className="bg-[--panel] border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-black/20">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <p className="ml-auto text-sm text-[--muted] font-mono">Live preview</p>
      </div>
      <div className="p-4 text-sm font-mono text-left">
        <pre>
          <code className="text-[#7CB5FF]">
            SELECT
            <br />
            &nbsp;&nbsp;{'<span className="text-[#E6E7EA]">date_trunc(<span>\'</span>month<span>\'</span>, order_date)</span>'} AS month,
            <br />
            &nbsp;&nbsp;{'<span className="text-[#E6E7EA]">brokerage_id</span>'},
            <br />
            &nbsp;&nbsp;{'<span className="text-[#5EE6A8]">SUM</span>(<span className="text-[#E6E7EA]">trade_volume</span>)'} AS total_volume
            <br />
            <span className="text-[#7CB5FF]">FROM</span> {'<span className="text-[#E6E7EA]">public.securities_trades</span>'}
            <br />
            <span className="text-[#7CB5FF]">WHERE</span> {'<span className="text-[#E6E7EA]">asset_class</span>'} = {'<span className="text-[#F9C58D]">\'Equities\'</span>'}
            <br />
            <span className="text-[#7CB5FF]">GROUP BY</span> 1, 2
            <br />
            <span className="text-[#7CB5FF]">ORDER BY</span> 1 DESC;
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodePreview;
