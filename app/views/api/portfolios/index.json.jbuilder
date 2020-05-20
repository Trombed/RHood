json.array!(@valuations) do |valuation|
    json.date valuation.updated_at
    json.valuation valuation.valuation
end