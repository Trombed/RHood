@watch_lists.each do |watch_list|
  json.set! watch_list.id do
    json.extract! watch_list, :id, :name, :ticker_symbol
  end
end
