json.array!(@valuations) do |valuation|
    json.date valuation.updated_at.in_time_zone('Eastern Time (US & Canada)')
    json.valuation valuation.valuation


end